---
title: "Patient circuit"
cover: "./images/patient-circuit.png"
category: "MCI"
date: "22/03/2018"
chapter: "10"
---
# Patient circuit

```mermaid
graph TD
    ARRIVAL[Arrival at hospital] --> TRIAGE[Triage]
    TRIAGE --> RED[RED]
    TRIAGE --> YELLOW[YELLOW]
    TRIAGE --> GREEN[GREEN]
    TRIAGE --> BLACK[BLACK]
    RED --> BLUE[BLUE]
    YELLOW --> RED
    YELLOW --> BLUE
    BLUE --> ICU[Palliative Care]
    YELLOW --> PTC[Primary Trauma Care]
    RED --> PTC
    PTC --> SC[Stabilization Care]
    SC --> SRGCAP{Surgical Capacity?}
    SRGCAP --Yes--> SRGICU[Surgery and/or ICU]
    SRGICU --> IPD[Hospitalisation]
    IPD --> DIS[Discharge]
    SRGCAP --No--> REF[Referral]
    GREEN --> TREAT[Treatment]
    TREAT --> SECU[Secu OK]
    SECU --> DIS2[Discharge]
    BLACK --> MORGUE[Morgue]
    style BLACK fill:#666
    style RED fill:#f33
    style GREEN fill:#3f3
    style BLUE fill:#33f
    style YELLOW fill:#ff3

```

## Your hospital patient circuit

![Patient circuit](./images/patient-circuit.png "Patient circuit")

||
|--------|
|Must not be too different from the usual circuit|
|Must be clearly indicated (draw lines with paint or use colored tape)|
|Must provide enough space for the ambulances  movements|
|Must foresee additional space if needed|
|Must be tested with a (fake) patient on a stretcher|
|Must be known by all the staff|

