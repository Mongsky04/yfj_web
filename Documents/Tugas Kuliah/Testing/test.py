from flask import Flask, render_template, redirect, url_for
import os

app = Flask(__name__)  # tanpa template_folder atau static_folder

devices = [
    {"name": "PC Client 1", "status": "Online", "tailscale_ip": "100.100.100.1"},
    {"name": "PC Client 2", "status": "Offline", "tailscale_ip": "100.100.100.2"},
    {"name": "PC Client 3", "status": "Online", "tailscale_ip": "100.109.156.56"}
]

@app.route('/')
def index():
    return render_template('index.html', devices=devices)

@app.route('/connect/<ip>')
def connect(ip):
    command = f'start ssh.exe taufiq2310512085@100.109.156.56'
    os.system(command)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
