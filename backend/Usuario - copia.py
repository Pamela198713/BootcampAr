class Usuario:
    def _init_(self, nombre, apellido, edad, email):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
        self.email = email

    def get_nombre_completo(self):
        return self.nombre + " " + self.apellido

    def get_edad(self):
        return self.edad

    def get_email(self):
        return self.email

    def set_email(self, nuevo_email):
        self.email = nuevo_email
