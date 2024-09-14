let orderfood = new Promise((resolve, reject) => {
  let foodIsAvailable = true;
  if (foodIsAvailable) {
    resolve("🍔 Your food is ready!");
  } else {
    reject("🚫 Sorry, we ran out of food");
  }
});

orderfood
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });


// Simulated asynchronous file reading function with Promises
// Simulated asynchronous file reading function with Promises
function textFile(filename) {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous operation with setTimeout
    setTimeout(() => {
      if (filename === "file1.txt") {
        const fileContent = "🍏 Apples\n🍊 Oranges";  // Content for file1.txt
        resolve(fileContent);  // Resolve with file content
      } else if (filename === "file2.txt") {
        const fileContent = "🥜 Peanut butter\n🍌 Banana";  // Content for file2.txt
        resolve(fileContent);  // Resolve with file content
      } else {
        reject("File not found");  // Reject if file not found
      }
    }, 1000);  // Simulate 1 second delay
  });
}

// Test Case: Using the promise-based textFile function with an existing file
textFile("file1.txt")
  .then(content => console.log(`📝 File Content:\n${content}`))
  .catch(error => console.error(`❌ Error: ${error}`));

// Test Case: Using the promise-based textFile function with a non-existing file
textFile("unknown_file.txt")  // This filename does not exist
  .then(content => console.log(`📝 File Content:\n${content}`))
  .catch(error => console.error(`❌ Error: ${error}`));


// Simulated function to fetch user data
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching data for user: ${userId}`);
      if (userId === 1) {
        resolve({ userId: 1, name: 'Hashim' });  // Resolve with user data
      } else {
        reject('User not found');  // Reject if user not found
      }
    }, 1000);  // Simulate 1-second delay
  });
}

// Simulated function to fetch posts for a user
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching posts for user: ${userId}`);
      if (userId === 1) {
        resolve(['Post 1', 'Post 2', 'Post 3']);  // Resolve with user posts
      } else {
        reject('No posts found for user');  // Reject if no posts are found
      }
    }, 1000);  // Simulate 1-second delay
  });
}

// Simulated function to fetch comments for a post
function fetchPostComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching comments for: ${post}`);
      if (post === 'Post 1') {
        resolve(['Comment 1', 'Comment 2']);  // Resolve with comments
      } else {
        reject('No comments found for post');  // Reject if no comments are found
      }
    }, 1000);  // Simulate 1-second delay
  });
}

fetchUserData(1)  // Start by fetching user data
  .then(user => {
    console.log(`👤 User: ${user.name}`);
    return fetchUserPosts(user.userId);  // Fetch posts for the user
  })
  .then(posts => {
    console.log(`📝 Posts: ${posts}`);
    return fetchPostComments(posts[0]);  // Fetch comments for the first post
  })
  .then(comments => {
    console.log(`💬 Comments on first post: ${comments}`);
  })
  .catch(error => {
    console.error(`❌ Error: ${error}`);  // Handle any errors in the chain
  });


  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())  // Convert response to JSON
  .then(posts => console.log("📝 Posts:", posts))  // Handle the posts data
  .catch(error => console.error("❌ Error fetching posts:", error));