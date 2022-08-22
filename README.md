# React Practice Timer

This app is a simple practice timer to track progress across multiple tasks or disciplines. 

## Features

The Practice Timer has the following features:

### `Start, Pause, and Resume Interval`

Clicking on the Start Button Begins the interval clock.
That button then becomes a Pause button if you need to step away from an interval to make some tea or take some other kind of break then you can resume your interval by clicking the same button again. Only resetting the interval will erase time currently logged and reset the timer and the hour and minutes of the beginnig of the session.

### `Log Interval`

Clicking on the Log Interval button will log your interval to the list of intervals, the timer does not have to be stopped to do this. You can pause the interval when you are done working and set the detals at that time if you wish. You can then log the interval after you have decided to stop work for that interval.
Intervals are automatically organized by date. Interval details are set by typing in the name and selecting the interval type to the left of the Log Interval Button. 

### `Interval Details`

Each interval in the interval list will show its detial by clicking the 'show details' button.
Clicking that button expands the  interval details to show the date the interval was logged as well as the interval duration and its name if you chose to enter one. Notes for the interval are also diplayed for a more detailed log of work accomplished during this interval. clicking 'hide details' reverts back to the default view.

clicking edit details allows for input of multi-line notes as well as the option to delete the interval altogether. 
clicking delete interval will generate and alert box for you to make sure you really want to delete the interval.
you also have a button for cancelling changes if you are in the middle of editing notes and decide to discard changes. 

### `Settings`

The Setting tab allows you to add and delete categories. 
You can log an interval with no category at all if you like but only named and assigned categories will be sent to the next tab for analysis.

### `Analysis`

The 'Analysis' Tab gives you totals of how much time you spent on intervals. This data is presented to you in two simple but useful ways. 
The contianer first totals all the time by named catergory. 
Scrolling down you will see a second section that allows you to look at totals for the past 1-4 weeks to give you picture of what your habits have been across categories in a fairly recent past. Use the dropdown menu in that section to select a number between 1 and 4. 


### Additional Information

This proof-of-concept demo utilizes a json-server API to mock-up the back end. That db.json file is populated with hypothetical data so that the demo will have enough diversity of data to show its full feature set. 


