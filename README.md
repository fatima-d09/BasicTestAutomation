

# BasicTestAutomation ✨
This repository contains a basic software test automation project for Youtube.com. The purpose of this project is to demonstrate the automation of simple test scenarios on the Youtube website.

# Prerequisites 🧱
To run the test automation project, you need to have the following software installed on your machine:

1. Node.js (v12 or higher)
   To check to see your version: 
```
   node -v
```    
2. npm (normally installed with Node.js
  ```  
    npm
```
# Setup 🏗️
- Clone this repository to your local machine or download the source code as a ZIP file.
- Navigate to the project's root directory.
- Install the project dependencies by running the following command:
       
       npm install
 
# Running the Test 🏃🏾‍♀️
To run the automated test, use the following command:
    
    npm run wdio 
    
Instead of writing wdio, one can also write, wdio run ./wdio.conf.js . 
wdio is used as a simplified way of writing the latter based on package.json .
   
This command will execute the test scripts using the WebdriverIO framework and output the test results to the console.
    
# Configuration 🧮

The test automation project uses a configuration file to define the test settings. The configuration file can be found at wdio.conf.js. You can modify this file to customize various settings such as the browser to be used, timeouts, and test reporters.

# Test Reports 📄

The project is configured to generate test reports using the Allure framework. After running the tests, the reports will be generated in the allure-report directory. To view the reports in a user-friendly format, you can use the Allure Command-Line tool. Make sure you have Allure installed and then run the following command:
    allure open 
    
 This will open a web page with detailed test reports.

To install allure, type the following in the commad line:
  
  npm install @wdio/allure-reporter --save-dev

Edit the reporters in the wdio.config.js file:
```
   reporters: ['spec',
        ['allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,  //disableWebdriverScreenshotsReporting was set to false
            }]],
 ```        
Install the Allure command-line tool:
   
   allure generate [**allure_output_dir_name**] && allure open
    
Process the results directory:
    
    allure open   
