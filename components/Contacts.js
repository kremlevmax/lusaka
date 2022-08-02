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
            <label>Name *</label>
            <input type='text' id='first' name='first' />
            <input type='text' id='last' name='last' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
