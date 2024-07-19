# Far Away Travelling Tracking App

![Packing List](https://img.shields.io/badge/Packing%20List-App-blue)

A React application to manage your packing list. Users can add, delete, sort, and mark items as packed for their trips.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Functionality](#functionality)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Demo
You can view a live demo of the application :
![farAwayDemo](https://github.com/user-attachments/assets/a16b947f-68bf-445a-baa0-6134b5788b95)



## Features
- **Add Items**: Add new items to the packing list with descriptions and quantities.
- **Delete Items**: Remove items from the packing list.
- **Mark as Packed**: Mark items as packed to keep track of what has been packed.
- **Sort Items**: Sort items by input order, description, and packed status.
- **Statistics**: View statistics on the total number of items and the percentage of items packed.

## Functionality
#### 1. Adding Items
Users can add items to their packing list by filling out a form that includes the item's description and quantity. Each item is then displayed in the packing list.

#### 2. Deleting Items
Users can delete items from the packing list by clicking the delete button next to each item. A confirmation prompt ensures that items are not deleted accidentally.

#### 3. Marking Items as Packed
Users can mark items as packed by clicking on a checkbox next to each item. Packed items are visually distinguished with a line-through style.

#### 4. Sorting Items
Users can sort the packing list by three criteria:
1. **Input Order**: The default order in which items were added.
2. **Description**: Alphabetical order based on the item description.
3. **Packed Status**: Items are sorted by their packed status, with packed items grouped together.

#### 5. Statistics
The app provides real-time statistics about the packing progress. It displays the total number of items, the number of packed items, and the percentage of packed items. When all items are packed, a special message is displayed to indicate that packing is complete.

## Installation
To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/packing-list-app.git
cd packing-list-app
npm install
```

## Usage
To run the application locally, use:

``` bash
npm run dev
```

## Components
#### 1. App
The main component that renders the entire application, including the Logo, Form, PackingList, and Stats components.

#### 2. Logo
A simple component that renders the app's logo.

#### 3. Form
A form component that allows users to add new items to the packing list.

##### 4. PackingList
A component that renders the list of packing items. It allows sorting and passing of props to Item components for deletion and toggling packed status.

#### 5. Stats
A component that displays statistics about the packing progress, including the total number of items and the number of packed items.

#### 6. Item
A component that renders individual packing list items. It includes buttons for deleting items and marking them as packed.
