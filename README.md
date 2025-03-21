# LUIGI - Local Universal Interface for Getting Intelligence

## Overview
LUIGI is a high-speed platform designed to solve the frustrating problem that students face when downloading large machine learning datasets and models. By providing access to datasets and models through a local server connection, LUIGI enables download speeds of up to 1Gbps, dramatically reducing wait times and encouraging students to pursue their ML projects.

## Problem Statement
Students frequently abandon their machine learning project ideas due to:
- Slow and frustrating download processes for large datasets
- Long wait times for downloading pre-trained models
- Limited internet speeds on typical connections
- Time constraints within academic environments

## Purpose
LUIGI aims to provide a platform connected to a local server from which students can download datasets and models at high speeds (up to 1Gbps). This removes a significant barrier to entry for ML projects and encourages educational exploration.

## How It Works
The system architecture consists of:
1. A frontend user interface for students
2. A local server that caches popular datasets and models
3. Regular updates (weekly or biweekly) that sync with online repositories
4. High-speed connections between users and the local server

### Flow Process
- Traditional approach: Frontend → Online Repositories (extremely slow) → Server
- LUIGI approach: Frontend → Local LUIGI Server (very fast) → Updated regularly from online repositories

## Tech Stack
- **Frontend**: React JS with TailwindCSS
- **UI Components**: ShadCN UI Library
- **Backend**: Express JS and Node JS
- **Design Tools**: Figma for website design
- **API Testing**: Postman

## Features and Future Scope
1. Availability of new and trending datasets
2. Availability of new and trending models
3. Sign-up/login page for user management
4. Announcements section for weekly or biweekly updates
5. Extremely high download speeds (up to 1Gbps)
6. Detailed descriptions for every model and dataset with direct download options

## Benefits
- Promotes and motivates students to build innovative ML solutions
- Removes technical barriers to educational projects
- Provides a consistently up-to-date collection of resources
- Saves valuable time for students working on deadlines
- Increases project completion rates
