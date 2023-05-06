import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import request,Flask, render_template, request, redirect

# Redirige al usuario a una página de confirmación

app = Flask(__name__)

@app.route('/enviar', methods=['POST'])
def enviar():
        # Configura las variables necesarias
    destinatario = "dominguezjesu26@gmail.com"
    asunto = "Nuevo mensaje de Peñitequeños"

    # Obtiene los datos del formulario

    correo = str(request.form['email'])
    mensaje = str(request.form['mensaje'])

    # Construye el mensaje de correo electrónico
    contenido = f"Correo electrónico: {correo}\nMensaje:\n{mensaje}"

    # Configura el mensaje de correo electrónico
    msg = MIMEMultipart()
    msg['From'] = correo
    msg['To'] = destinatario
    msg['Subject'] = asunto
    msg.attach(MIMEText(contenido, 'plain'))

    # Configura la conexión SMTP y envía el correo electrónico
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    smtp_username = "dominguezjesu26@gmail.com"
    smtp_password = "Jesus19787188."
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(smtp_username, smtp_password)
    server.sendmail(correo, destinatario, msg.as_string())
    server.quit()

    return redirect(request.referrer)
