# Hacktoberfest Indore 2022

**Datacode** Presents Hacktoberfest Indore 2022 - A hands on session to help people start their open source journey.

## What is Hacktoberfest?

Hacktoberfest is an open source software event that lasts a month. Everyone in our worldwide community is welcome to attend Hacktoberfest!
The idea is to contribuite in open-source initiatives and to spread the word about how amazing the open source community is. 💙

## Who can participate?

Anyone who is willing to contribute to open-source.
Contributions can be code updates, but not always. You may assist any open source project by assisting them in managing their documentation.

**For More details regarding hacktoberfest follow this article by [@srashtisj](https://github.com/srashtisj)**: [Hacktoberfest FAQs](https://medium.com/techvraksh/october-or-should-i-say-hacktoberfest-124c33171302)

## What is Hacktoberfest Indore?

We, as a community, are attempting to connect with community experts and members while also assisting one another in learning about open source. Why is it important, and how might it help you in the future?

## How to contribute?
**1.** Fork the <a href="https://github.com/datacode-in/Hacktoberfest-Indore-2022.git">repository</a> by clicking fork symbol at the top right corner.

A forked repository would be created affiliated to your account. Now open the command line on your device, add type the commands(requires git installed on your system)

**2.** Clone the forked repository.
```
   git clone https://github.com/<your-github-id>/Hacktoberfest-Indore-2022.git
```

**3.** Navigate to the project directory.
```
   cd Hacktoberfest-Indore-2022
```

**4.** Create a new branch:
```
   git checkout -b <Add your branch name>
```

**5.** Now, in the data.json file, add your data information in below provided in json format,

```
{
    "github": "<your_github_user_id>"
    "firstname": "<your firstname>",
    "lastname": "<your lastname>",
    "about": "<Something about you>",
    "image": "https://github.com/<your_github_user_id>.png"
}
```
**6.** Now save your file, add it to staged area using the commond, 
```
git add .
```
**7.** Now, your data is staged, now you can commit it to make the changes final. Use the command provided below,
```
git commit -m "your message"
```
Now deploy your changes to GitHub.
Push your changes using the command `git push`:
```
git push origin -u <add-your-branch-name>
```

**8.** Submit your changes for review: 

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

Now submit the pull request.

Soon all your changes will be merged into the master branch of this project. You will get a notification email once the changes have been merged.

Boom!!! you just got your first PR merged.