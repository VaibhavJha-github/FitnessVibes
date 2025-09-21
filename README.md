FitnessVibes - A React Native Workout App

FitnessVes is a mobile fitness application built with React Native, designed to guide users through pre-set workout routines. The app provides a clean, user-friendly interface to help users select a workout, perform exercises with timed intervals, and track their progress through a session.
Features

    Pre-defined Workout Plans: Comes with built-in workout routines like "Full Body Workout" and "Abs Beginner".

    Exercise Library: Each workout plan includes a list of exercises with recommended reps and sets.

    Guided Workout Sessions: An interactive screen guides the user through each exercise one by one.

    Integrated Timers: Includes a "Start" timer for exercises and a "Rest" timer between sets to keep the user on track.

    Progress Tracking: The app ticks off completed exercises, providing visual feedback to the user.

    Workout Completion Summary: A results screen at the end of a session summarizes the workout performed.

Tech Stack

    Framework: React Native

    Navigation: React Navigation

    Language: JavaScript/JSX

Getting Started

To get a local copy up and running, please follow these simple steps.
Prerequisites

Make sure you have set up your development environment for React Native.

    Node.js & npm/yarn

    Watchman (for macOS)

    React Native CLI

    Xcode (for iOS development)

    Android Studio (for Android development)

For detailed instructions, please follow the official React Native Environment Setup Guide.
Installation & Setup

    Clone the Repository:

    git clone [https://github.com/VaibhavJha-github/FitnessVibes.git](https://github.com/VaibhavJha-github/FitnessVibes.git)
    cd FitnessVibes

    Install Dependencies:

    npm install

    or if you use Yarn:

    yarn install

    Install iOS Pods:

    cd ios && pod install && cd ..

Running the Application

    Start the Metro Bundler:
    Open a terminal in the project's root directory and run:

    npx react-native start

    Run on a Simulator/Emulator:
    Keep the Metro bundler terminal open and run one of the following commands in a new terminal tab:

        For iOS:

        npx react-native run-ios

        For Android:

        npx react-native run-android

License

Distributed under the MIT License. See LICENSE.txt for more information.
