import { styles, home } from "../style";

const Home = () => {
  return (
    <div className={`${home.spacing} ${home.center}`}>
      <h1 className={`${styles.title}`}>Task Management Application</h1>
      <p className={`${home.spacing}  `}>
        Hey there! Welcome to your own personalised task management application.
        <br />
        Here is a short description about how you can make great use of it.
        <ul className={`${home.text}`}>
          <li>
            Click All Tasks to view all the tasks, and to create, update, and
            delete tasks
          </li>
          <li>
            To edit a particular task, click on the edit button next to it, edit
            the task, and press enter to save the changes{" "}
          </li>
          <li>You may click on any particular task to mark it as completed</li>
          <li>You can unmark any of the tasks by clicking on it</li>
        </ul>
        So, this is it! Happy Task Managing!!
      </p>
    </div>
  );
};

export default Home;
