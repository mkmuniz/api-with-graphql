# What is?

An api made with Node TS, Express and GraphQL, it's just a project made to study about GraphQL queries.

# What is GraphQL?

It's a tecnology used to fetch data in a way whatever that you want, in the other words, if you just want get the 'Titles' from a book's array, you can use GraphQL
to do it! That's sound great, is'nt? Also, you can install in any backend project made by any language

# How to run

<h2>First Step</h2>

Clone the repository in your Desktop, enter into project and open a terminal, after that, type 'npm install' in repository root and wait it install the packages.

<h2>Second Step</h2>

Now you can run it typing `npm start` and the server will start to running at `localhost:3000` path and acessing you'll see this:
![Screenshot from 2022-09-29 20-30-58](https://user-images.githubusercontent.com/65512888/193159789-c0de5740-db87-4b9c-b9af-ec9794fb0483.png)

<h2>Third Step</h2>

So, we have to do a query, firstly, enter in this endpoint `localhost:3000/graphql` and it'll return this page
![Screenshot from 2022-09-29 20-33-00](https://user-images.githubusercontent.com/65512888/193160016-f560e43f-ca54-4c4b-8b0c-1efa792d8163.png)

<h2>Fourth Step</h2>

Copy this query and paste in left blank space

```
query {
  books {
    author
    title
    date
  }
}
```

Click on 'Execute Query' button that's found 'GraphiQL' title's side.

And... TADA! And look what it gave to us:

![Screenshot from 2022-09-29 20-35-42](https://user-images.githubusercontent.com/65512888/193160373-db79ac5e-39b3-4872-9975-bc08eea8b48f.png)


Even if we specify just the title property, it'll return what we asked for

![Screenshot from 2022-09-29 20-38-02](https://user-images.githubusercontent.com/65512888/193160350-d4414803-6b6b-4e9a-a1e9-b8212092b678.png)


