# Solution

## The Problem:

There are many problems that SCDF firefighters face in their training and actual practice.

These problems include:

1. **<u>SCDF uses an outdated practice - ‘Staging’ - within the Rota system (rotation system)</u>**
   - Rotation of personnel is done using manual timing of each person’s time spent in hazardous environments and tracked on a whiteboard. A person is tasked to keep track of who went in and call them out when they have reached the limit.
2. **<u>Constant training incidents of heat fatigue in the SCDF</u>**
   - According to anecdotal evidence, it is common to see personnel suffering from heat fatigue and having to visit the hospital during training sessions, a lot due to the lack of effective management of personnel.
3. **<u>Firefighters are unable to control their breathing well when stressed, and in many cases, they may use too much air</u>**
   - This is a problem because firefighters use air cylinders with a 45min period of effectiveness before they have to rotate with other personnel due to air shortages. They may end up having a shortage of oxygen before the 45min period due to constant breathing, thus posing a hazard for the firefighter.  





## Our Analysis:

We propose the usage of IoT to tackle the 3 problems highlighted above.

1. <u>**SCDF uses an outdated practice - ‘Staging’ - within the Rota system (rotation system)**</u>

**OUR SOLUTION:**

We propose that the rotation system needs to be better automated to reduce human error of tracking and recording timing of firefighters, and to provide a more accurate judgement of the conditions of the personnel. 

Thus, we propose a platform that can track the entry and exit timing of each firefighter using wearable technology.

Key Features:

- Wearable technology to be activated when firefighter begins breathing from oxygen tank.
- Entry time to begin recording when wearables is activated.
- System should prompt the individual through the wearable closer to 45 minutes to begin evacuating the premises.



2. **<u>Constant training incidents of heat fatigue in the SCDF</u>**

**OUR SOLUTION:**

We propose that the wearable technology proposed earlier be able to give an accurate judgement of the conditions of the personnel. We should use variables such as heart rate which can be detected by wearables to determine the current physical condition of the individual, and give a rating for the physical condition.

This rating should be used by operations officers to determine to rotate personnel more effectively.

Thus, we propose a platform that can track the physical conditions of each firefighter using wearable technology.

Key Features:

- Wearable technology to be activated when firefighter begins breathing from oxygen tank.
- Wearables track the physical factors of the firefighters. Such factors are:
  - Internal Conditions - Heart Rate 
  - Internal Conditions - Temperature of Firefighting Suit 
  - Internal Conditions - Internal Humidity of Firefighting Suit
  - External Conditions - Temperature of Environment 
  - External Conditions - Humidity of Environment
- Based on the conditions, the system will flag on the dashboard for the operations officer the current colour rating (status) of each firefighter, allowing the operations officer to make decisions.
- The wearable will also indicate to the firefighter of his current condition and make the necessary relay to the team IC.

![image-20200613005651184](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/images/Warning%20Conditions.jpg)



3. **Firefighters are unable to control their breathing well when stressed, and in many cases, they may use too much air**

**OUR SOLUTION:**

We propose that wearables track the breathing frequency of the firefighters through the heart rate variability (HRV), and send reminders to them when they have erratic breathing patterns. 

This will allow firefighters to control their breathing, conserve air and a lower potential of light headedness.

Thus, we propose a platform that can track the HRV of each firefighter using wearables.

Key Features:

- Wearables are activated when FF begins breathing from oxygen tank.
- Wearables track the HRV of the FF and send timely reminder through a beep to the FF to control his breathing if HRV hits past a certain threshold value. 





## Our Solution:

### Introduction

Bringing these 3 analyses earlier together, we propose a wearable technology, linked with IBM cloud services to track the variables of the firefighters.

The variables are:

- Physical Rating of FF (Red, Yellow, Green)
  - Internal Conditions - Heart Rate 
  - Internal Conditions - Temperature of Firefighting Suit 
  - Internal Conditions - Internal Humidity of Firefighting Suit
  - External Conditions - Temperature of Environment 
  - External Conditions - Humidity of Environment
- Entry time and time spent in the hazard zone
- Heart Rate Variability

These variables are to be measured by sensors. 

For more information on each component, please refer to the contents below. 

- [Sensors](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#sensors)
- [IBM IoT Platform](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#ibm-iot-platform)
- [Node-RED](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#node-red)
- [Dashboard](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#dashboard)
- [Our Architecture](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#our-architecture)
- [Putting It All Together](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/solution.md#putting-it-all-together)  



## Sensors

The hardware portion will be developed with Arduino (https://www.arduino.cc/en/main/software). 

It will include various sensors that will measure both the external conditions of the environment and the internal conditions of the suit and the firefighter. Moreover, the gadget will include a vibration motor as a reminder for firefighters to maintain their composure and aid their breathing.

We will use a controller board based on the ESP32 micro-controller with NodeMCU firmware. We will attach external sensors to this controller board to gather the variables listed earlier in this file and send to the IBM IoT platform for analysis. 

The sensors consist of:

- External Sensors
- Internal Sensors
- Internal Mechanisms
- Charging Mechanism




### External Sensors

The external sensors are used to determine the risk of entering the environment. 

**Components:**

1. Temperature
- Sensor - MAX6675 Cold-Junction-Compensated K-Thermocoupleto-Digital Converter
- Rationale for choosing this sensor - Allows for high temperature readings of up to 1024°C. Temperatures inside of the building can reach up to 700°C, so the sensor needs to accommodate for the drastic temperatures.
- Link to sensor - https://www.maximintegrated.com/en/products/sensors/MAX6675.html

2. Humidity
- Sensor - Humidity and Temperature Sensor DHT11
- Rationale for choosing this sensor - Allows for a wide range of RH reading (20% to 90% with ±5% RH)
- Link to sensor - https://create.arduino.cc/projecthub/techno_z/dht11-temperature-humidity-sensor-98b03b


### Internal Sensors

The internal sensors are used to determine the conditions of the firefighter.

**Components:**

1. Heart Rate
- Sensor - MAX30100 Pulse Oximeter and Heart Rate Sensor
- Rationale for choosing this sensor - Uses pulse oximetry to determine the heart rate of the firefighter
- Link to sensor - https://how2electronics.com/interfacing-max30100-pulse-oximeter-sensor-arduino/

2. Humidity
- Sensor - Humidity and Temperature Sensor DHT11
- Rationale for choosing this sensor - Allows for a wide range of RH reading (20% to 90% with ±5% RH)
- Link to sensor - https://create.arduino.cc/projecthub/techno_z/dht11-temperature-humidity-sensor-98b03b

3. Temperature
- Sensor - LMD35DZ
- Rationale for choosing this sensor - Accurate linear temperature sensor
- Link to sensor - https://randomnerdtutorials.com/arduino-lm35-lm335-lm34-temperature-sensor/


### Internal Mechanisms

The internal mechanisms are used to ensure calm breathing of the firefighters.

**Components:**

1. Heart Rate Variability (HRV)
- Sensor - MAX30100 Pulse Oximeter and Heart Rate Sensor
- Rationale for choosing this sensor - Uses pulse oximetry to determine the heart rate of the firefighter. The HRV can then be computed from the heart rate.
- Link to sensor - https://how2electronics.com/interfacing-max30100-pulse-oximeter-sensor-arduino/

2. Vibration Motor
- Device - ROB-08449
- Rationale for choosing this sensor - Acts as a non-audible indicator that can notify the firefighter if their HRV is not ideal. It can then simulate the ideal breathing pace for the firefighter to regain their breathing
- Link to motor - https://www.sparkfun.com/products/8449




### Charging Mechanisms

We use a portable lithium ion polymer (LiPo) battery with a JST plug that can be charged with a corresponding LiPo charger that has a USB plug.

**Components:**

1. LiPo Battery
- Battery - Lithium Ion Polymer Battery - 3.7V 100mAh
- Rationale - Small enough to be included in a portable wearable diagnostic and is able to last for at least 2 hours.
- Link to battery - https://www.adafruit.com/product/1570

2. LiPo Charger
- Charger - Adafruit Micro LiPo - USB LiPoly Charger
- Rationale - The corresponding charger for the LiPo Battery
- Link to charger - https://www.adafruit.com/product/1304



### Connecting to IBM IoT

We will have a code that makes it possible to read these metrics and forward these to the platform using Arduino.

(if we have a code, insert code link here)  



## IBM IoT Platform

Register the devices and connect to the platform. Afterwards, we will set up a connection between our IoT platform and the Node-RED platform. 

Our IoT platform will collect the necessary data from the sensors.  

## Node-RED
![nodered1](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/images/node%20red%201.png)
![nodered2](https://github.com/this-is-project-x/Open-Sauce-Lifewatch_SCDFXIBM/blob/master/images/node%20red%202.png)

## Dashboard

## Our Architecture

(Insert how the entire architecture works with each other)  



## Putting It All Together

(Explain how everything comes together in a Tl;dr)  



## Authors

**Team Name:** 

Open Sauce

**Members:**

* Wang Dong Yue

* Lim Yun Jie

* Yap Tzi Richard

* Zhang Yu Feng

* Jeremy Ong Keng Chuan

