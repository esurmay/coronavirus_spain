

# lck_common_architecture

This repository contains projects that have common aspects of software architecture and are used from another repositories. This repository contains the next projects:


<details>
<summary><h2 style="cursor:pointer">Luckia.CommonArchitecture.Authentication</h2></summary>  
It's a project used by API's for allow authentication and authorization of the clients. For example, this project is used in CreditTicketApi.
### How to use it?
1. Install the Nuget Package in the API where it is needed.
2. It's necessary to include an "AuthenticationParams" section in appsettings.json and appsettings.Development.json files to configure the authentication information (authkeys, type of authentication method, etc.).
   AuthenticationParams will contain the AuthenticationMethod, that can have three values: 
    1. AuthKeyAuthentication: It uses the AuthKeyAuthenticationSection. This section provides a list of clients with roles and authkeys to authorize this clients to call endpoints of the API. In this case, the BasicAuthenticationKey and the BasicUserPassAuthenticationSection can be empty because they are not used.
       ```json
       "AuthenticationParams": {
		  "AuthenticationMethod": "AuthKeyAuthentication",
		  "BasicAuthenticationKey": "",
		  "BasicUserPassAuthenticationSection": {
			"Username": "",
			"Password": "",
			"Crypto": "",
			"Key": "",
			"IV": ""
		  },
		  "AuthKeyAuthenticationSection": {
			"Clients": [
			  {
				"Name": "CreditsTickets",
				"AuthKey": "BananaSmoothie",
				"Roles": "External"
			  },
			  {
				"Name": "CreateCreditsTickets",
				"AuthKey": "OrangeSmoothie",
				"Roles": "Internal"
			  }
			]
		  }
		}
        ```
		Then, each Controller or each method that needs to be authenticated will contain the annotation: [Authorize(Roles = "RoleName")], for example:
		```csharp
		[Authorize(Roles = "External")]
		```
		or
		```csharp
		[Authorize(Roles = "Internal")]
		```
		Using this AuthenticationMethod, requests must contain a header "AuthKey" with the right value of the auth key in plain text.
		
    2. BasicAuthentication: Uses BasicAuthenticationKey param to authorize the use of the endpoints of the API. In this case, the AuthKeyAuthenticationSection and the BasicUserPassAuthenticationSection can be empty because they are not used.
       ```json
	   "AuthenticationParams": {
		  "AuthenticationMethod": "BasicAuthentication",
		  "BasicAuthenticationKey": "BananaSmoothie",
		  "BasicUserPassAuthenticationSection": {
			"Username": "",
			"Password": "",
			"Crypto": "",
			"Key": "",
			"IV": ""
		  "AuthKeyAuthenticationSection": {
			"Clients": [
			  {
				"Name": "",
				"AuthKey": "",
				"Roles": ""
			  }
			]
		  }
		}
        ```
		Using this AuthenticationMethod, requests must contain a header "Authorization" with value "Basic " + the value of the BasicAuthenticationKey (BananaSmoothie in the example) encoded in Base64, for the example: "Basic QmFuYW5hU21vb3RoaWU="
		
	3. BasicUserPassAuthentication: It uses the BasicUserPassAuthenticationSection, which has five params: the username and the password to access to the endpoints of the API, a Crypto param that indicates if that information is in plain text (Z = 0) or encoded in Base64 (Z = 1), and Key and IV (Inicialization vector) params, that are used to decrypt the password (these two params must not be changed). In this case, the BasicAuthentication and the AuthKeyAuthenticationSection can be empty because they are not used.
		```json
	   "AuthenticationParams": {
		  "AuthenticationMethod": "BasicUserPassAuthentication",
		  "BasicAuthenticationKey": "",
		  "BasicUserPassAuthenticationSection": {
			"Username": "CreditsTickets",
			"Password": "BananaSmoothie",
			"Crypto": "Z" -> Z = 0 or 1,
			"Key": "GmOvoDE72fDw+JDF/ml7M0BmP+/w9ShpquMOKBJYny4=",
			"IV": "QijIDGZBx+HCv3Mo8AWrrQ=="
		  "AuthKeyAuthenticationSection": {
			"Clients": [
			  {
				"Name": "",
				"AuthKey": "",
				"Roles": ""
			  }
			]
		  }
		}
		```
		Using this AuthenticationMethod, requests must contain a header "Authorization" with value "Basic " + the value of the username and the password of the BasicUserPassAuthenticationSection, with the format username:password (CreditsTickets:BananaSmoothie in the example). If the Crypto param is "1", the password must be encrypted using the Rijndael algorithm, for the example: "Basic Q3JlZGl0c1RpY2tldHM6ZEFQWTUwbkRXUmVRR0FGcFIydHFRUT09".

3. Add the AuthenticationParams parameter to the app settings file, for example the latest parameter in the class:
	```csharp
	public class CreditTicketApiAppSettings
	{
		[Required]
		public string Log4NetConfigFile { get; set; }

		[Required]
		public APIInfo APIInfo { get; set; }

		[Required]
		public ConnectionStrings ConnectionStrings { get; set; }

		[Required]
		public string LogFolder { get; set; }

		[Required]
		public AuthenticationParams AuthenticationParams { get; set; }        
	}
	```	
	
4. Add the authentication in the method ConfigureServices in Startup.cs file

	```csharp
	public void ConfigureServices(IServiceCollection services){

		....

		//Get from AuthenticationParams from the configuration
		var appSettingsSection = Configuration.GetSection(nameof(CreditTicketApiAppSettings));
        var appSettings = appSettingsSection.Get<CreditTicketApiAppSettings>();

		// Adding a singleton of AuthenticationParams with the read value so it can be used by dependency injection
		services.AddSingleton(typeof(AuthenticationParams), appSettings.AuthenticationParams);

		//AuthenticationHandlerFactory returns the related authentication according to the configuration variable and then we call Initialize method to start the authentication
		AuthenticationHandlerFactory.Instantiate(appSettings.AuthenticationParams, null, Logger, Encoder, Clock).Initialize(services);
	}
	```

5. Enable it in the Configure method with the necessary configuration for the authentication and authorization

	```csharp
	public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory){

		...
		
		//Get from AuthenticationParams from the configuration (recommended: reuse the same appSettings variable used in ConfigureServices method saving it as class variable
		var appSettingsSection = Configuration.GetSection(nameof(CreditTicketApiAppSettings));
        var appSettings = appSettingsSection.Get<CreditTicketApiAppSettings>();

		//AuthenticationHandlerFactory returns the related authentication according to the configuration variable and then we call Enable method to activate the necessary configuration for the authentication and authorization
		AuthenticationHandlerFactory.Instantiate(appSettings.AuthenticationParams, null, Logger, Encoder, Clock).Enable(app);

		app.UseAuthorization();
	}
	```

6. Full example of Developmentconfiguration file used in CreditTicketApi. It is recommended use a specific name for the AppSettings section (CreditTicketApiAppSettings in the example) in order to be able to create different Octopus variables for differents APIs in the same repository, for example CreditTicketApiAppSettings:AuthenticationParams:AuthenticationMethod=AuthKeyAuthentication for one API and SessionApiSettings:AuthenticationParams:AuthenticationMethod=BasicAuthentication for other one.
	```json
	{
	  "AllowedHosts": "*",
	  "Log4NetConfigFile": {
		"Name": "log4net.config"
	  },
	  "CreditTicketApiAppSettings": {
		"APIInfo": {
		  "Title": "Luckia CreditTicket API",
		  "Description": "API for operations with credit tickets",
		  "Version": "1.0",
		  "DefaultCulture": "es-ES"
		},
		"ConnectionStrings": {
		  "MainConnectionString": "Server=test-db01.htkem.local;User Id=XXXXXXXX;Password=XXXXXXXX;Database=CanariesDB;Application Name=CreditTicketAPI"
		},
		"LogFolder": "C:\\CreditTicket_Logs\\",
		"AuthenticationParams": {
		  "AuthenticationMethod": "AuthKeyAuthentication",
		  "BasicAuthenticationKey": "",
		  "BasicUserPassAuthenticationSection": {
			"Username": "",
			"Password": "",
			"Crypto": "",
			"Key": "",
			"IV": ""
		  },
		  "AuthKeyAuthenticationSection": {
			"Clients": [
			  {
				"Name": "CreditsTickets",
				"AuthKey": "BananaSmoothie",
				"Roles": "External"
			  }
			]
		  }
		}
	  }
	}
	```
</details>
<details>
<summary><h2 style="cursor:pointer">Luckia.CommonArchitecture.OAuthAuthentication</h2></summary>  
It's a project used by API's for allow oauth authorization. For example, this project is used in CreditTicketApi.

### How to use it?

1. Install the Nuget Package in the API where it is needed. After this the package Owin.Token.AspNetCore should be installed in order to not having running issues with the Nuget Package used for OAuth authentication.

2. Add the OAuth authentication and session parameters to the appsettings.json file
```
"OAuthAuthenticationSettings": {
  "DecryptionKey": "6A5571F8277568467B4FFACAD2A912CD26058E3181657EC15B6068892C3676AC",
  "ValidationKey": "4FE0EC2B6FBEA210D96D7CFE46722BD51A0FBB580EFE2517A92AE4D1782751325D1D352EF78280B516B3538291772B5A1E15464CBDA8817044B5DFC3B8BD5A0E",
  "ValidationMethod": "SHA1",
  "EncryptionMethod": "AES"
},
"SessionApiSettings": {
  "Username": "sessionApiUser",
  "Password": "Bura2020",
  "Timeout": "0:0:15",
  "SessionApiUrl": "http://test-iis03.htkem.local:9052/"
},
 ```
3. Enable it in the ConfigureServices method from Startup.cs file with the necessary configuration for the oauth authentication.

 ```
services.AddMvc(options => options.EnableEndpointRouting = false).SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
var appSettingsOAuthSection = Configuration.GetSection(nameof(OAuthAuthenticationSettings));
var OAuthSettings = appSettingsOAuthSection.Get<OAuthAuthenticationSettings>();
var appSettingsSessionSection = Configuration.GetSection(nameof(SessionApiSettings));
var SessionSettings = appSettingsSessionSection.Get<SessionApiSettings>();
OAuthAuthentication.Initialize(services, OAuthSettings, SessionSettings);
 ```

4. Now you can access player information in the controller like the following example:

 ```
this.GetPlayerId().Value
 ```

5. Use the Authorization attribute from this nuget package and authorize the OAuth token.

 ```
[AuthorizeByToken]
[HttpPost]
[Route("creditticket/HideFromHistory")]
 ```
</details>
<details>
<summary><h2 style="cursor:pointer">Luckia.CommonArchitecture.Cache</h2></summary>
it's a project used by client projects like WebApi or Backend to manage in-memory data store like: Redis.

This package contains **BaseCacheRepository** class. This is the base class which contains the CRUD methods to manage in-Memory Data,  **BaseCacheRepository** is an abstract class, therefore you need to implement it  and override its methods.  

In this case the engine is REDIS but it could be used by others Engines based on In-Memory Data store like MongoDB, couchBD, etc..

### How to use it?

1. Install the Nuget Package in the project where it is needed. After this, the package **NRediSearch** should be installed in order to not having running issues with the Nuget Package used for CommonArchitecture.Cache.

2. It's necessary to include parameters in appsettings.json and appsettings.Development.json files to configure the cache information:

 1.Create a node which contains the following parameters, this parameters should be naming according the business needs: 
 
 1. **CustomParentNodeName**: custom parent name of the node. 
 2. **Connection**: connectionstring of redis cache server.
 3.  **IndexName**: custom index name. the nomenclature should be:
      *Environment_project_CustomName*
 4.  **DefaultLimit**: limit of results by default.
 5.  **DefaultLanguage**: Language by default.
 6.  **SerializationKey**: Name of the object for serialization. that means object class woud be the object in this sample.

  	Let's create a full example based on a Person Entity:
	1. create Person Class
```csharp
	public class Person
	{
			public string Id;
			public string Name;
			public string LastName;
			public string address;
	}
```
b.The configuration in app.settings and app.{*Environment* }.settings: 
 ```json
 {
			 "PersonsCache": {
			   "Connection": "localhost",
			   "IndexName": "Environment_project_CustomName",
			  "DefaultLimit": "1000",
			   "DefaultLanguage": "Spanish",
			   "SerializationKey": "AllObject"
			 }
}
```
c.Create a repository and implement  <b>BaseCacheRepository</b> 
<p>
		<b>BaseCacheRepository</b> methods:.
		<b>abstract methods</b>:
		<b>GetSchemaFields()</b>: In this method it will be defined the columns. You can choose what colunms want to save as a search fields.  This is usefull when you are going to search in the cache.
		<b>GetLanguage()</b>: it will be defined the the language. Indicates the default language for data in the index. 
		<b>GetSerializationKey()</b>: defined the name of the key where all the object class is saved in JSON Format. 		
		</p>
		<b>CRUD methods</b>:
		<b>FillCache()</b>: Save all data in the cache. 
		<b>Add()</b>: this method add a new Key-Value document in the cache. you must create a Dictionary and pass as a parameter to Add base method. *parameters: base.Add(string Id, Dictionary< string, dynamic>) *
		 <b>Update()</b>: update a new Key-Value document in the cache. you must create a Dictionary and pass as a parameter to Update base method. *parameters: base.Update(string Id, Dictionary< string, dynamic>) *
		<b>Get()</b>: retrieve data from the cache. Is necesary set the object type in base.Get method and pass Id.  Example: *base.Get< Class>(id)*
		<b>Delete()</b>: this method delete a key-value data in cache. *Parameters: id.   Example: base.Delete(id)*
	 ```csharp
	public class PersonRepository : BaseCacheRepository
	{
			private readonly string INDEX_NAME = "";
			private readonly string DefaultLanguage = "";
			private readonly int DefaultLimit;
			private readonly string SerializationKey = "";
			private IConfiguration _configuration;

		public PersonRepository(IConfiguration configuration):
			base(configuration["CustomParentNodeName:Connection"], configuration["CustomParentNodeName:IndexName"])
		{
			_logRepository = logRepository;
			_configuration = configuration;
			_bonusEngineSysInfoRepository = bonusEngineSysInfoRepository;
			INDEX_NAME = _configuration["CustomParentNodeName:IndexName"];
			DefaultLimit = Convert.ToInt32(_configuration["CustomParentNodeName:DefaultLimit"]);
			DefaultLanguage = _configuration["CustomParentNodeName:DefaultLanguage"];
			SerializationKey = _configuration["CustomParentNodeName:SerializationKey"];
		}
		//the implementation of the GetSchemaFields() would be:
	  protected override string[] GetSchemaFields()
		{
			return new string[] {
				"Id",
				"Name",
				"LastName"
			};
		}

		protected override string GetLanguage()
		{
			return DefaultLanguage;
		}

		protected override string GetSerializationKey()
		{
			return SerializationKey;
		}

		public void FillDataCache()
			{            
				DropIndex();
				CreateIndex();
				var data = GetAllPersonData();
				var list = new List<DocumentEntities>();

				foreach (var item in data)
				{
					var dictItem = new Dictionary<string, dynamic>
					{
						{ "Id", person.Id },
						{ "Name", person.Name },
						{ "LastName", person.LastName },
						{ "Address", person.Address },
						{ "AllPersonObject", JsonConvert.SerializeObject(person, Formatting.Indented) }
					};

					var document = new DocumentEntities
					{
						DocumentId = item.Id.ToString(),
						DocumentsValues = dictItem,
						Index = INDEX_NAME,
						ExpirationTime = DateTime.Now
					}; 
					list.Add(document);
				}
				FillCache(list);            
			}

			public CacheResponse Add(Person person)
			{           
				 var dictItem = new Dictionary<string, dynamic>
					{
						{ "Id", person.Id },
						{ "Name", person.Name },
						{ "LastName", person.LastName },
						{ "Address", person.Address },
						{ "AllPersonObject", JsonConvert.SerializeObject(person, Formatting.Indented) }
					};

				 return base.Add(person.Id.ToString(), dictItem);
			}

			public bool Update(Person person)
			{           
				var dictItem = new Dictionary<string, dynamic>
					{
						{ "Id", person.Id },
						{ "Name", person.Name },
						{ "LastName", person.LastName },
						{ "Address", person.Address },
						{ "AllPersonObject", JsonConvert.SerializeObject(person, Formatting.Indented) }
					};

				 return base.Update(Id, dictItem);
			}

			public Person Get(string Id)
			{ 
				return Get<Person>(Id); 
			}

			public bool Delete(string Id)
			{
				return Delete(Id);
			}
	 }
	```
Is recommended for good practices, create a Interface and implement it to encapsulate CRUDs funtionalities .
```csharp
  public interface IPerson
    {
        void FillPersonCache();
        CacheResponse AddPerson(Person person);
		bool UpdatePerson(Person person);
		Person GetPerson(string Id);
        bool DeletePerson(string Id);
    }
```
```csharp
public class PersonRepository : BaseCacheRepository, IPerson
	{
		//implementation here
	}
```
</details>
######End
