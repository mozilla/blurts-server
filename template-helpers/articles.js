"use strict";

const { getStrings } = require("./hbs-helpers");

const articleCopy = {
  "how-hackers-work": {
    paragraphs: [
      {
        paragraph: "Hackers don’t really care whose personal information and credentials they can get, as long as they can get a lot of it. That’s why cyber criminals target massive companies with millions of users. These hackers look for a security weakness — the digital equivalent of leaving a door unlocked or window open. They only need to find one door or window to get inside. Then they steal or copy as much personal information as possible that lives in users’ online accounts.",
      },
      {
        subhead: "",
        paragraph: "Once they get your data, cyber criminals can start their real work. We don’t always know what they intend to do with the data, but usually they will find a way to profit from it. The effects to your online account might not be immediate. But they can be very serious.",
      },
      {
        subhead: "All types of data can be valuable.",
        paragraph: "Some data — like banking information, bank card numbers, government-issued ID numbers, and PIN numbers — is valuable because it can be used to steal the victim’s identity or withdraw money. Email addresses and passwords are also valuable because hackers can try them on other accounts. All sorts of data can be valuable in some way because it can be sold on the dark web for a profit.",
      },
      {
        subhead: "What makes a password easy to guess.",
        paragraph: "If hackers can get a list of email addresses from a data breach, they already have a good start. All they have to do is pick their website of choice and try these emails with the most-commonly used passwords. Chances are, they’ll be able to get in to quite a few accounts. So don’t use any of these 100 Worst Passwords of 2018.",
        list: [
          "123456 and password are the most commonly used passwords. Don’t use them.",
          "Switching a letter for a symbol (p@ssw0rd!) is an obvious trick hackers know well.",
          "Avoid favorite sports teams or pop culture references. Use something more obscure.",
          "Don’t use a single word like sunshine, monkey, or football. Using a phrase or sentence as your password is stronger.",
          "Don’t use common number patterns like 111111, abc123, or 654321.",
          "Adding a number of piece of punctuation at the end doesn’t make your password stronger.",
        ],
      },
      {
        subhead: "One exposed password can unlock many accounts.",
        paragraph: "Hackers know people reuse the same passwords. If your banking password is the same as your email password is the same as your Amazon password, a single vulnerability in one site can put the others at risk.",
      },
      {
        paragraph: "It’s why you should use different passwords for every single account. The average person has 90 accounts, and that’s a lot of passwords remember. Security experts recommend using a password manager to safely store unique passwords for every site.",
      },
      {
        subhead: "Hackers don’t care how much money you have.",
        paragraph: "Think you don’t need to worry because you don’t have much money to steal? Hackers couldn’t care less. There are countless ways to leverage all types of personal data for profit.",
      },
      {
        paragraph: "Through identity theft, cyber criminals can open new credit cards or apply for loans in your name. By getting your financial information, they can make purchases or withdrawals. These attackers can even find ways to target your friends and family once they gain access to your email.",
      },
    ],
  },
  "after-breach": {
    paragraphs: [
      {
        lead: "You get an email, either from Firefox Monitor or a company where you have an account. There’s been a security incident. Your account has been compromised.",
      },
      {
        paragraph: "Getting notified that you’ve been a victim of a data breach can be alarming. You have valid cause for concern, but there are a few steps you can take immediately to protect your account and limit the damage.",
      },
      {
        subhead: "Read the details about the breach.",
        paragraph: "Read closely to learn what happened. What personal data of yours was included? Your next steps will depend on what information you need to protect. When did the breach happen? You may receive the notice months or even years after the data breach occurred. Sometimes it takes awhile for companies to discover a breach. Sometimes breaches are not immediately made public.",
      },
      {
        subhead: "If you haven’t yet, change your password.",
        paragraph: "Lock down your account with a new password. If you can’t log in, contact the website to ask how you can recover or shut down the account. See an account you don’t recognize? The site may have changed names or someone may have created an account for you.",
      },
      {
        subhead: "If you’ve used that password for other accounts, change those too.",
        paragraph: "Hackers may try to reuse your exposed password to get into other accounts. Create a different password for each website, especially for your financial accounts, email account, and other websites where you save personal information.",
      },
      {
        subhead: "Take extra steps if your financial data was breached.",
        paragraph: "Most breaches only expose emails and passwords, but some do include sensitive financial information. If your bank account or credit card numbers were included in a breach, alert your your bank to possible fraud. Monitor statements for charges you don't recognize.",
      },
      {
        subhead: "Review your credit reports to catch identity theft.",
        paragraph: "If you have credit history in the United States, check your credit reports for suspicious activity. Ensure that no new accounts, loans, or cards have been opened in your name. By law, you’re permitted to one free report from the three major credit reporting bureaus every year. Request them through annualcreditreport.com. And don’t worry, checking your own credit report never affects your score.",
      },
    ],
  },
  "strong-passwords": {
    paragraphs: [
      {
        lead: "Your password is your first line of defense against hackers and unauthorized access to your accounts. The strength of your passwords directly impacts your online security.",
      },
      {
        subhead: "Combine unrelated words to make stronger passwords.",
        paragraph: "To create a strong password, try combining two or more unrelated words. It could even be an entire phrase. Then change some of the letters to special letters and numbers. The longer your password, the stronger it is.",
      },
      {
        paragraph: "A single word with one letter changed to an @ or ! (such as p@ssword!) doesn’t make for a strong password. Password cracking programs contain every type of these combinations, in every single language.",
      },
      {
        subhead: "Certain words should be avoided in all passwords.",
        paragraph: "Many people use familiar people, places, or things in passwords because it makes their passwords easy to remember. This also makes your passwords easy for hackers to guess.",
      },
      {
        paragraph: "According to a study conducted by Google, passwords that contain the following information are considered insecure because they’re easy to figure out. You can find much of this info after spending some time on someone’s social media profiles.",
      },
      {
        list: [
          "Pet Nnames",
          "A notable date, such as a wedding anniversary",
          "A family member’s birthday",
          "Your child’s name",
          "Another family member’s name",
          "Your birthplace",
          "A favorite holiday",
          "Something related to your favorite sports team",
          "The name of a significant other",
          "The word “Password",
        ],
      },
      {
        subhead: "Use different passwords for every account.",
        paragraph: "To keep your accounts as secure as possible, it’s best that every single one has a unique password. If one account gets breached, then hackers can’t use those login credentials to gain access to any other accounts.",
      },
      {
        paragraph: "While no one can stop hackers from hacking, you can stop reusing the same password everywhere. It makes it far too easy for cyber criminals to attack one site and get your password for others.",
      },
      {
        subhead: "Use a password manager to remember all your passwords.",
        paragraph: "Do you really need to remember 100 passwords? Not at all. A password manager is a piece of software that keeps all your password safe, encrypted, and protected. It can even generate strong passwords for you and automatically them in to websites and apps.",
      },
      {
        paragraph: "Password managers act like a digital safe-deposit box for all your online accounts. You just need one key to get into your accounts: A single, easy-to-remember but hard-to-guess password. That password unlocks the safe.",
      },
      {
        paragraph: "But what if your password manager gets hacked? A good one keeps your passwords encrypted behind a password they don’t know (only you do). They don’t store any of your credentials on their servers. While no single too can guarantee total online safety, security experts agree that using a password manager is far more secure than using the same password everywhere.",
      },
      {
        subhead: "Add an extra layer of security with two-factor authentication.",
        paragraph: "Many websites offer two-factor authentication, also known as 2FA or multi-factor authentication. On top of your username and password, 2FA requires another piece of information to verify yourself. So even if someone has your password, they can’t get in.",
      },
      {
        paragraph: "Withdrawing money from an ATM is an example of 2FA. It requires your pin code and your bank card. You need these two pieces to complete the transaction.",
      },
      {
        paragraph: "Many websites support 2FA, including Google and Amazon. The site will text you a code to your phone to enter after your password. YubiKeys are USB ports that verify your accounts. Security apps like DUO allow you to verify your accounts through your phone.",
      },
      {
        paragraph: "When you set up 2FA, many sites will give you a list of backup codes to verify your account. A password manager is a great place to store these.",
      },
      {
        passwordDosAndDonts: {
          listHeadline: "Password do’s and don’ts",
          doList: [
            "Do combine two or more unrelated words. Change letters to numbers or special characters.",
            "Do make your passwords at least 8 characters long. Aim for 12-15 characters.",
            "Do use a combination of upper and lower case letters, numbers, and symbols.",
            "Do include unusual words only you would know. It should seem nonsensical to other people.",
            "Do keep your passwords protected and safe, like encrypted in a password manager.",
            "Do spread various numbers and characters throughout your password.",
            "Do create unique and complex passwords for every site.",
            "Do an extra layer of security with two-factor authentication (2FA).",
          ],
          dontList: [
            "Don’t use the word password, or any combination of it. P@ssword! is just as easy for hackers to guess.",
            "Use short, one-word passwords, like sunshine, monkey, or football.",
            "Don’t place special characters (@, !, 0, etc.) only at the beginning or the end.",
            "Don’t include personal information like your birthdate, address, or family members’ names.",
            "Don’t share your passwords. Don’t put them on a piece of paper stuck to your computer.",
            "Don’t use common patterns like 111111, abc123, or 654321.",
            "Don’t use the same password everywhere.",
            "Don’t think a weaker password is safer because you have 2FA.",
          ],
        },
      },
    ],
  },
};

function getArticleCopy(args) {
  const articles = articleLinks(args);
  articles.forEach(article => {
    const articleName = article["class"];
    article["copy"] = articleCopy[articleName].paragraphs;
  });

  return articles;
}

function articleLinks(args) {
  const locales = args.data.root.req.supportedLocales;
  const articleLinks = [
    {
      title: "Understand how hackers work",
      stringId: "how-hackers-work",
      class: "how-hackers-work",
      pathToPartial: "svg/icon-trackers",
      subhead: "Today’s cyber criminals care most about getting your passwords.",

    },
    {
      title: "What to do after a data breach",
      stringId: "what-to-do-after-breach",
      class: "after-breach",
      pathToPartial: "svg/icon-at",
      subhead: "How to lock down your accounts and keep your information out of the wrong hands",
    },
    {
      title: "How to create strong passwords",
      stringId: "create-strong-passwords",
      class: "strong-passwords",
      pathToPartial: "svg/icon-password",
      subhead: "Make your passwords strong, secure, and hard to guess.",
    },
  ];

  return getStrings(articleLinks, locales);
}

module.exports = {
  articleLinks,
  getArticleCopy,
};
