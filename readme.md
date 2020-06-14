# LIFEWATCH - EFFECTIVELY MANAGING FIREFIGHTERS' CONDITIONS DURING EXECUTION

Firefighters face many risks in their line of work, particularly physiological stresses and hazardous risks. Hazardous risks are inherently inevitable and mitigated by sound training principles, planning, and equipment maintenance; While physiological stresses and the risks that follows can be avoided with real-time monitoring of a firefighter's vitals, and the balancing of workload within a team.

The extreme heat, smog, and load of equipment in firefighting precipitates as health risks during firefighting operations such as heat fatigue, and shortage of oxygen and light-headedness. In some cases, generally healthy firemen with some development of plaque in the heart may suffer from acute cardiac arrest under extreme conditions 

(https://www.fsi.illinois.edu/documents/research/FFLSRC_FinalReport.pdf)

These physiological risks poses a danger to not only individual firefighters, but the entire team; akin to a casualty during wartime.

The SCDF utilises an outdated 'staging' practice - a rotation system that manually tracks time spent by firefighters in 'hot-zones' during training and operations. This practice ensures integrity of PPE (Personal Protective Equipment) and personnel physiological status are constantly upkept to minimise physiological stresses and risks. 

However, the manual nature of this practice leads to extra manpower demands, and a potential for human error in accurately determining a firefighter's physiological state. With LIFEWATCH, we've developed a prototype platform that uses XXX (XXX TECHNOLOGIES TO BE GIVEN A SHORT EXPLANATION) to measure XXX factors. This data is then used by a machine learning algorithm to predict the current physical condition of the firefighter and the need to withdraw the firefighter from the scene, all automated, no human error. (MAYBE ABIT MORE ELAB)



## Our Solution

LIFEWATCH is based on these features:

1. [Sensors](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#sensors)
2. [IBM IoT Platform](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#ibm-iot-platform)
3. [Node-RED](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#node-red)
4. [IBM Machine Learning](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#ibm-machine-learning)
5. [Dashboard](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#dashboard)
6. [Architecture](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#our-architecture)
![architecture](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/images/architecture.jpg)





## Project Contents

- [What is LIFEWATCH?](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/readme.md#what-is-lifewatch)
- [Understanding LIFEWATCH in detail](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/readme.md#understanding-lifewatch-in-detail)
- [Our Architecture](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/readme.md#our-architecture)
- [Getting Started](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/readme.md#getting-started)
- [Running Tests](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/readme.md#running-tests)
- [Contributing](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/readme.md#contributing)
- [Team Name and Authors](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/readme.md#team-name-and-authors)
- [Acknowledgments](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/readme.md#acknowledgements)





## What is LIFEWATCH?

Watch this video to understand what LIFEWATCH is all about and how we solve firefighters' pressing concerns. 

[![Watch the video](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/images/YoutubeVideo%20template.png)](https://www.youtube.com/watch?v=4PYsbXVBx9g&feature=youtu.be)





## Understanding LIFEWATCH in detail

Please read [solution.md](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md) for a comprehensive explanation. 





## Our Architecture

### Architecture Overview

Please read [solution.md](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#our-architecture) for a comprehensive explanation.

![Software Architecture](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/images/Software%20Architecture.jpg)




### Components

Hardware: 

- External Sensors
  - MAX6675 Cold-Junction-Compensated K-Thermocoupleto-Digital Converter
  - Humidity and Temperature Sensor DHT11
  
- Internal Sensors
  - MAX30100 Pulse Oximeter and Heart Rate Sensor
  - Humidity and Temperature Sensor DHT11
  - LMD35DZ

- Internal Mechanism
  - ROB-08449

- Charging Mechanism
  - Lithium Ion Polymer Battery - 3.7V 100mAh
  - Adafruit Micro LiPo - USB LiPoly Charger


Cloud:

- IBM Watson IoT Platform - Gathers data from the wearables
- Node-RED - Facilitates data transfer between the ML models and the IoT platform
- MYSQL Database - Collects values from ML Models into a database to be queried 




Client Frontend:

![Dashboard pic](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/images/Dashboard%20Image.jpg)





### Component Details

A step by step understanding of the different component details can be found in [solution.md](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#our-solutions:)



## Getting Started

These instructions will get you a copy of our project up and running on your local machine for testing purposes. See deployment for notes on how to deploy the project on a live system.



### Software Prerequisites

1) [Node Red](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#our-architecture)
2) [IBM Watson IOT](https://www.ibm.com/cloud/watson-iot-platform)
3) [IBM Cloud Machine Learning](https://www.ibm.com/cloud/machine-learning)



### Installing

A step by step series of examples that tell you how to get a development environment running

**Node Red**

Setting up node-red [locally](https://nodered.org/docs/getting-started/local):
To install Node-RED locally you will need a supported version of [Node.js](https://nodered.org/docs/faq/node-versions).

- On mac:
```
sudo npm install -g --unsafe-perm node-red
```

- On windows:
Open command prompt and check if Node.js and npm are installed correctly
```
node --version && npm --version
```
Then install Node-RED
```
npm install -g --unsafe-perm node-red
```

Running Node-RED:
Go to command prompt, then
```
node-red
```
Then, go to your web browser and type in localhost:1880

Nodes to install:
```
- node-red-contrib-scx-ibmiotapp
- node-red-node-mysql
```

**IBM Watson IOT**

Register the new devices to the platform and create a connection between the IoT platform and the Node-RED application.

**IBM Cloud Machine Learning**

[Create an autoAI experiment](https://iraangeles-ibm.github.io/SCDF-INNOVATION-CHALLENGE/Workshop_Watsion_Studio/AutoAI.html)


## Running Tests

Explain how to run the automated tests for this system



### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```



### And coding style tests

Explain what these tests test and why

```
Give an example
```



## Built With

- [IBM IoT Platform](https://www.ibm.com/internet-of-things/solutions/iot-platform/watson-iot-platform) - Used to collect and capture data from the sensor (rephrase)
- [Node-RED](https://nodered.org/) - Used to run a custom machine learning algorithm on the collected data (rephrase)





## Contributing

Please read [CONTRIBUTING.md](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us. 





## Project Roadmap

**LIFEWATCH currently is working on:**

- Collecting the humidity and temperature of both the suit and the environment, as well as the heart rate of the firefighters
- Using the data to train and improve our machine learning model to better predict when to rotate the firefighters
- Building up a database for analyzing firefighters' performance during missions and trainings
- Testing the integrity of the sensors under extreme conditions

**LIFEWATCH is planning to work on:**

- Exploring additional hardware options to improve the funcationality and performance of the devices
- Monitoring other types of data using additional sensors or wearables
- Improve the type and volume of information available in the dashboard

**LIFEWATCH will eventually work on:**

- Wider distribution of LIFEWATCH to other forces in Singapore (i.e. SAF, SPF and RSN)
- Explore possibility of having an offline system

**FINAL GOALS:** Roll out LIFEWATCH to entire SCDF as a valuable and effective personnel management platform.





## Team Name and Authors

**Team Name:** 

Open Sauce

**Members:**

* Wang Dong Yue

* Lim Yun Jie

* Yap Tzi Richard

* Zhang Yu Feng

* Jeremy Ong Keng Chuan







## Acknowledgments

* Ye Hein Aung, friend and a Section Commander in firefighting in the SCDF


