# zstTechnologies

This is an expo managed Todo react native app .

# Instructions

Clone this repo to your local machine

`cd` into the project folder on the terminal

Run `yarn install`

## Running your Todo application

1.  Start Metro: `yarn start`
2.  Start the application: Open a new terminal inside your React Native project folder. Run `expo start or yarn start`

## Todo App Description

This Todo app application is designed to help users manage their tasks and daily schedules. It provides an easy-to-use interface to create, organize, and prioritize tasks.

In this specific Todo app, there is a check on the length of the todos array. If the length is greater than 0 and less than 10, it displays an activity indicator with a message "Task in progress". This tells the user that there are pending tasks that need to be completed.

If the length of todos is 0, it displays a CardScreen component with a message "No Task Yet" and instructions to add tasks. The user can add new tasks circle button which display a modal pop-up.

If the length of todos equals 10, it pops up an alert indicating that "Limit is reached". This lets the user know that they have reached the maximum limit of tasks that they can add to their list.

In the TaskItems screen, the user can view all the completed tasks and delete all todos. Todos can be deleted individually in the NewList screen. This provides the user with the flexibility to manage their tasks as per their requirements.

Overall, this Todo app provides an intuitive and user-friendly interface to manage tasks and helps the user to stay organized and productive.
