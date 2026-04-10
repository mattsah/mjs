import
    smtp,
    mininim,
    mininim/web/router,
    mininim/templates,
    valido/email

type
    Contact = ref object of AbstractAction

begin Contact:
    method validate(): JsonNode {. base .} =
        result = newJObject()

        let
            email = this.get("email", "")
            name = this.get("name", "")
            msg = this.get("msg", "")

        if not isEmail(email):
            result.set("email.invalid", %"Please enter a valid email")
        if strip(name).len == 0:
            result.set("name.invalid", %"Please enter a name")
        if strip(msg).len < 64:
            result.set("msg.invalid", %"Please give more context")

    method invoke(): Response =
        let
            smtp = this.app.get(Smtp)
            errors = this.validate()
            email = this.get("email", "")
            name = this.get("name", "")
            msg = this.get("msg", "")

        if errors.len > 0:
            result = this.html(400, "resources/pages/@contact.html", (
                errors: errors
            ))
        else:
            smtp.sendmail(createMessage(
                fmt "Portfolo: new message from {name}",
                dedent(strip(
                    fmt """
                        Email: {email}
                        Message:

                        {msg}
                    """,
                    chars = {'\n'}
                )),
                getEnv("SMTP_FROM"),
                @[
                    getEnv("FORM_RCPT")
                ]
            ))

            result = this.html(200, "resources/pages/@contact.html", (
                success: true
            ))

shape Contact: @[
    Route(
        path: "/contact",
        methods: @[HttpPost]
    )
]
