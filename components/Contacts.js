import styles from "../styles/modules/Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__container}>
        <div className={styles.contacts__part}>
          <h2>Contact</h2>
          <p>Feel free to contact us with any questions.</p>
          <h4>Email</h4>
          <p>email@example.com</p>
          <h4>Phone</h4>
          <p>(555) 555-5555</p>
        </div>
        <div className={styles.contacts__part}>
          <form>
            <fieldset>
              <legend>Name *</legend>
              <label htmlFor='first'>
                <input type='text' id='first' name='first' />
                <span>First Name</span>
              </label>
              <label htmlFor='last'>
                <input type='text' id='last' name='last' />
                <span>Last Name</span>
              </label>
            </fieldset>

            <fieldset>
              <legend>Email *</legend>
              <input type='text' id='first' name='first' />
            </fieldset>
            <fieldset>
              <legend>Message *</legend>
              <textarea name='message' id='message'></textarea>
            </fieldset>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
