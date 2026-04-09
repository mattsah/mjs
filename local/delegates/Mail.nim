import
    smtp,
    mininim,
    mininim/dic

begin Smtp:
    proc build(app: App = nil): self {. static .}=
        result = newSmtp()
        result.connect(getEnv("SMTP_HOST", "localhost"), Port parseInt(getEnv("SMTP_PORT", "587")))

        if parseBool(getEnv("SMTP_TLS", "true")):
            result.startTls()

        if existsEnv("SMTP_USER"):
            result.auth(getEnv("SMTP_USER"), getEnv("SMTP_PASS"))

shape Smtp: @[
    Delegate()
]
