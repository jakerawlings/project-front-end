import Navigation from "./Navigation";

const PrivacyPolicy = () => {
  return (
      <div>
        <h1 className="display-1 text-center text-danger">Privacy Policy</h1>
        <Navigation active="privacy-policy"></Navigation>
        <h3 className="text-primary">
          Collection of Information
        </h3>
        <h5>Information you provide</h5>
        <p>
          We collect the data that you provide to us. This includes the
          username, password, and email that you provide when registering
          for an account. This also includes any information that you
          provide when interacting with the website such as your favorite
          movies and the contents of any movie reviews that you write.
        </p>
        <h5>Information we collect automatically</h5>
        <p>
          We use cookies to track your activity on the website. Cookies are
          small data files stored on your hard drive or in device memory that
          help us improve our website. If you do not want to cookies to
          track your activity, do not create and account.
        </p>
        <h3 className="text-primary">Use of Information</h3>
        <p>
          We use the information that we collect to provide a better experience
          for our users. More specifically, we use the data you provide to
          <ul>
            <li>Create and maintain your account</li>
            <li>Connect you to other users</li>
            <li>Personalize the content you see</li>
            <li>Track the number of visits to each part of the website</li>
          </ul>
        </p>
        <h3 className="text-primary">
          Sharing of Information
        </h3>
        <p>
          Your username, favorite movies, and reviews will be visible to other
          users to
          allow for connections between users. Any other information you choose
          to share through reviews will also be visible to other users.
          All of your other personal information (email, password) will not be
          shared with any other users or third-parties.
        </p>
        <h3 className="text-primary">
          Control over your data
        </h3>
        <p>
          Should you choose to indicate that you don't want us to keep your
          data by checking "delete my data" when deleting your account, all of
          your data will be removed from of our database.
        </p>
      </div>
  )
};

export default PrivacyPolicy;