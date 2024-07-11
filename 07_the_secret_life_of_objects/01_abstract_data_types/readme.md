# Abstract Data Types

## Introduction

In object-oriented programming (OOP), the main idea is to use objects to organize programs. Objects help keep the program structured and prevent everything from getting mixed up.

## Understanding Objects

Think of objects like an electric mixer. The people who design the mixer handle all the complex parts inside it. Users only need to know how to use the knobs to mix pancake batter.

### Example

A mixer has complex parts inside but provides a simple interface with a few knobs for operation. Similarly, an abstract data type, or object class, may have complex code but offers a limited set of methods and properties for use.

## Benefits of Abstract Data Types

1. **Encapsulation**: 
   - Objects hide complex code and show only necessary methods and properties.
   - This limits how different parts of the program interact.

2. **Modularity**: 
   - If there is a problem in one object class, it can be fixed or rewritten without affecting the rest of the program.

3. **Reusability**: 
   - Object classes can be used in multiple programs, so you don’t have to create the same functionality from scratch.

## JavaScript and Abstract Data Types

JavaScript’s built-in data structures, such as arrays and strings, are examples of reusable abstract data types.

### Interface and Encapsulation

Each abstract data type has an interface, which is the set of actions that external code can perform on it. Details beyond the interface are internal to the type and are not important for the rest of the program.

### Example: Numbers

Even basic things like numbers can be thought of as abstract data types. Their interface allows us to add, multiply, compare, and perform other operations.

## Collaboration of Object Classes

In classical OOP, focusing only on single objects can be limiting. Often, useful functionality involves a group of different object classes working together.

