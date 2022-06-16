import html from "html-literal";
export default () => html`
  <section>
    <form
      id="form"
      name="simple-contact-form"
      accept-charset="utf-8"
      action="https://formspree.io/f/meqnpdzw"
      method="post"
    >
      <fieldset>
        <div class="formText">
          <label for="full-name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="First and Last"
            required=""
          />
        </div>
        <div class="formText">
          <label for="email-address">Email Address</label>
          <input
            type="email"
            name="_replyto"
            placeholder="email@domain.tld"
            required=""
          />
        </div>
        <div class="formText">
          <label for="message">Message</label>
          <textarea
            rows="5"
            name="message"
            placeholder="Feedback"
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </div>
      </fieldset>
      <div class="formText">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </section>
`;
