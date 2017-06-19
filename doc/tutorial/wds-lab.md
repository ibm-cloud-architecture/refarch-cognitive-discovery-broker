# Building a Discovery Service for Weather data

IBM Watson Discovery Service (WDS) is a Watson service that provides the developers the ability to rapidly add a cognitive, search and content analytics engine to application to identify patterns, trends and insights that drive better decision making.
The purpose of this section is to show how to set up and configure Watson Discovery Service and how to inject document about weather management like hurricane. Watson Discovery Service is only available on Bluemix.
Once created WDS instance allows you to ingest (convert, enrich, clean, normalize), store and query data to extract actionable insights.

You can create and configure a Discovery service instance by using either the Discovery Tooling or the Discovery API. In the beginning of this tutorial we are using the Discovery Tooling to prepare the Discovery content.

The standard development path for using Watson Discovery is presented in the following diagram
![D-Flow](discovery-flow.png)

To summarize to be able to do search / query we need content, that needs to be injected and persisted in *collection*. We are addressing these steps in this lab.

We organize this tutorial in layers to address different skill set.

The labs files used for creating collection of documents are under the wds-docs folder, see the section about document preparation.

# Prerequisites
For Beginner you need to:
* Create a Bluemix account: Go to Bluemix (https://console.ng.bluemix.net and create a Bluemix account if you do not have one.
* Follow the steps 1 to

For developer the following skill set is assumed
* Bluemix, catalog and services
* Bluemix command line interface
* nodejs/express js

# Table of content
* [create a Watson Discovery Instance]()

# Configure Discovery Service
The Watson Discovery Service or WDS is listed under the Watson section of the Bluemix catalog. Before you start you need to create a service instance.
![]()
## Step 1 - Create a Watson Discovery Instance
This will allow you to create an environment where you can create one or more data collections into which you can add your own content and associate with a configuration.
1- Select “Catalog” from the top right corner to view the service catalog.
![Catalog](catalog-access.png)

Go to [Watson Discovery Service on Bluemix] (https://console.bluemix.net/catalog/services/discovery/?cm_mc_uid=35796192015914973653529&cm_mc_sid_50200000=1497371009&cm_mc_sid_52640000=1497371009&env_id=ibm:yp:us-south)  

2- From the Bluemix Catalog; first select “Watson” then select **Discovery**  

![](wds-catalog.png)  

3- On the Discovery page; Select “Create” and wait for the instance to be created.  
![](wds-create.png)

4- Create collection:  
The Discovery service includes a complete set of online tools **the Discovery Tooling** to help you quickly setup an instance of the service and populate it with data.  
![WDS Tooling](wds-launch.png)

The Discovery service tooling has been designed to save time by eliminating the need to use APIs to configure and populate your service. This lets application developers concentrate on creating high value ways for end users to experience the Discovery Service.In the Discovery service, the content that you upload is stored in a collection that is part of your environment. You must create the environment and collection before you can upload your content. So create the collection name it **Weather**
![Create collection](wds-collection.png)  

## Step 2 - Prepare Documents
The use case is related to hurricane knowledge.

##

# Configure Watson Discovery Service via APIs


# References
