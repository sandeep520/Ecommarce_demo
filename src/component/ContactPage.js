import React, { useState } from "react";

const ContactPage = () => {
  const [user, setUser] = useState({ name: "", email: "", mesaage: "" });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, message } = user;

    const res = await fetch(
      "https://ecommarce-contact-default-rtdb.firebaseio.com/Ecommarce-contact.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );
    alert("Enquiry successful");
  };

  return (
    <div class="container" style={{ justifyContent: "center" }}>
      <div class="row" style={{ textAlign: "start" }}>
        <div class="col-md-6 col-md-offset-3 " style={{ marginLeft: "33%" }}>
          <div class="well well-sm">
            <form class="form-horizontal" action="" method="post">
              <fieldset>
                <legend class="text-center">Contact us</legend>

                <div class="form-group">
                  <label class="col-md-3 control-label" for="name">
                    Name
                  </label>
                  <div class="col-md-9">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      class="form-control"
                      value={user.name}
                      onChange={getUserData}
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label" for="email">
                    Your E-mail
                  </label>
                  <div class="col-md-9">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Your email"
                      class="form-control"
                      value={user.email}
                      onChange={getUserData}
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label" for="message">
                    Your message
                  </label>
                  <div class="col-md-9">
                    <textarea
                      class="form-control"
                      id="message"
                      name="message"
                      placeholder="Please enter your message here..."
                      rows="5"
                      value={user.message}
                      onChange={getUserData}
                    ></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-md-12 text-right">
                    <button
                      onClick={PostData}
                      type="submit"
                      class="btn btn-primary btn-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
