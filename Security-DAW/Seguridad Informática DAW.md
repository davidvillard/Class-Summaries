
- La seguridad informática se refiere a garantizar sistemas seguros y confiables mediante políticas físicas y lógicas. Aunque alcanzar el 100% de seguridad es imposible, se busca un nivel máximo de seguridad y se presta atención a la prevención y resolución de daños en caso de ataques, como la realización de copias de seguridad.

La seguridad informática se define por la ISO27002 con tres propiedades fundamentales: 
  
- Confidencialidad (restringir acceso a información), 
- Integridad (asegurar autenticidad y precisión de datos)  
- Disponibilidad (permitir acceso autorizado a la información cuando se necesita). 

  Se considera un proceso que minimiza la vulnerabilidad de los activos de información en una organización

Se reconoce que la seguridad absoluta es imposible, por lo que se habla de fiabilidad, es decir, la probabilidad de que un sistema se comporte como se espera de él.


Los tres principios fundamentales de la seguridad informática son:

1. **Principio del acceso más sencillo:** Los intrusos usarán el método más simple para acceder y atacar un sistema. La vulnerabilidad siempre radica en el punto más débil.
    
2. **Principio de la caducidad del secreto:** Los datos confidenciales deben protegerse solo hasta que ese secreto deje de ser valioso como tal.
    
3. **Principio de eficiencia de las medidas tomadas:** Las medidas de control deben ser efectivas, eficientes, fáciles de usar y adecuadas al entorno.
    

Los expertos en seguridad informática deben considerar estos principios porque los objetivos de los ataques pueden ser cualquier activo del sistema informático: hardware, software, datos y personas. La seguridad es una cadena, tan débil como su eslabón más vulnerable.



Los objetivos principales de la seguridad informática, según las definiciones dadas, son:

- **Confidencialidad:** Asegurar que los recursos solo estén disponibles para las personas o máquinas autorizadas.
- **Disponibilidad:** Garantizar que los agentes puedan acceder a los servicios en el horario previsto, invirtiendo en recursos adicionales para evitar interrupciones.
- **Integridad:** Asegurar que solo los agentes autorizados puedan modificar los recursos del sistema, manteniendo los datos almacenados tal como los espera el usuario y evitando modificaciones no autorizadas.


Además de los tres objetivos principales de seguridad informática (confidencialidad, disponibilidad e integridad), se estudian la autenticación y el no repudio:

- **Autenticación:** Confirma la identidad de una persona o máquina.
- **No repudio:** Garantiza que ambas partes en una comunicación no puedan negar su participación, es decir, el emisor no puede negar el envío y el receptor no puede negar la recepción de un mensaje.

Para lograr estos objetivos se emplean varios mecanismos:

- **Autorización:** Tras la autenticación, los usuarios tienen distintos niveles de acceso a la información (lectura, modificación, etc.).
- **Encriptación:** Cifrar la información para que sea inaccesible para quienes no estén autenticados.
- **Auditoría:** Registro y análisis de las acciones realizadas por los agentes del sistema.
- **Copias de seguridad y respaldo de datos.**
- **Software antivirus y antispyware.**
- **Firewalls y proxies.**
- **Sistemas de identificación digital:** Firma electrónica y certificado digital.
- **Normativas y leyes sobre seguridad informática.**



Conceptos basicos Seguridad Informatica:

- **Exposición:** Posible pérdida o daño en un sistema informático.
- **Vulnerabilidad:** Debilidad en la seguridad de un sistema que puede ser explotada para causar pérdida o daño.
- **Ataque:** Acción intencionada para causar daño a un sistema.
- **Ameaza:** Factores (personas, máquinas o eventos) que podrían atacar un sistema causando daño, pérdida, modificación o destrucción de información, o negación de servicios críticos. Incluye acciones humanas, desastres naturales, errores humanos e internos en hardware o software.
- **Daño:** Consecuencia de una vulnerabilidad, amenaza o ataque.
- **Control:** Medida de protección (acción, dispositivo, procedimiento o técnica) que reduce una vulnerabilidad.



Hay cuatro formas de amenazas a la seguridad de un sistema informático: interrupción, interceptación, modificación y fabricación.

- **Interrupción:** Ataca la disponibilidad al destruir o hacer un recurso del sistema no disponible.
    
- **Interceptación:** Ataca la confidencialidad al permitir que una entidad no autorizada acceda a un recurso, como copiar programas o datos de forma ilícita o escuchar una red sin autorización.
    
- **Modificación:** Ataca la integridad al permitir que una entidad no autorizada no solo acceda a un recurso, sino que también lo manipule, como modificar valores en una base de datos o los datos transmitidos por una red.
    
- **Fabricación:** Ataca la autenticidad al insertar objetos falsificados en el sistema que son idénticos a los originales.
    

En cuanto a la clasificación de la seguridad informática:

- **Según el momento de la acción para proteger:**
    
    - **Seguridad activa (Prever):** Conjunto de medidas antes del ataque para prevenir o reducir daños en los sistemas, como el uso de usuarios y contraseñas, instalación de antivirus, etc.
    - **Seguridad pasiva (Curar):** Medidas implementadas después del ataque para minimizar su impacto y facilitar la recuperación del sistema, como la creación de copias de seguridad.
- **Según el activo a proteger:**
    
    - **Seguridad física:** Protege el hardware.
    - **Seguridad lógica:** Protege el software y los datos.




# Tema 2


Los principales objetivos que busca la criptografía son:

- **Confidencialidad:** Garantizar que la información se revele solo a usuarios autorizados. Por ejemplo, mediante el uso de HTTPS en un sistema de correo web, los datos de usuario/contraseña se cifran, lo que permite que el navegador y el servidor intercambien información de forma que no sea legible para otros.
    
- **Integridad:** Asegurar la exactitud de la información contra alteraciones, pérdidas o destrucciones. Por ejemplo, al firmar electrónicamente un documento, se proporciona un 'resumen' que garantiza que cualquier modificación en el documento original sería detectada al no coincidir el resumen del documento original con el del documento modificado.
    
- **Autenticación:** Verificación de la identidad. Por ejemplo, al utilizar SSH para conectarse a un equipo remoto, el cliente verifica la identidad digital del servidor SSH para asegurarse de que se está conectando al servidor real y no a un impostor.
    
- **No repudio (irrenunciabilidad o vinculación):** Vincula un documento o transacción a una persona o equipo. Por ejemplo, en la firma electrónica de documentos se garantiza que el emisor no pueda negar su participación, utilizando mecanismos que aseguran que un documento firmado electrónicamente por una persona con su identidad digital esté asociado a esa persona y no pueda ser firmado por otra.


**Criptografía de clave simétrica:**
- Usa una única clave para cifrar y descifrar mensajes.
- El remitente cifra un mensaje con la clave y el destinatario lo descifra con la misma clave.

**Criptografía de clave asimétrica:**
- No tiene problemas de distribución de clave.
- Cada participante tiene una pareja de claves:
  - **Clave privada:** Se mantiene en secreto, permite cifrar y descifrar mensajes.
  - **Clave pública:** Se comparte con otros, se usa para cifrar mensajes para el propietario y para verificar mensajes firmados por el propietario.

- La clave pública se usa para cifrar mensajes destinados a su propietario y verificar firmas digitales, mientras que la clave privada se utiliza para descifrar mensajes cifrados con la clave pública correspondiente y para generar firmas digitales.

**Sistemas criptográficos híbridos:**
- Usan claves asimétricas al principio para intercambiar una clave simétrica de sesión.
- La clave de sesión se utiliza para cifrar la comunicación de manera más eficiente.
- Ejemplo: protocolo SSH.

**Funciones Hash:**
- Convierten un conjunto de datos en una cadena de longitud fija.
- El valor devuelto se llama resumen, checksum o hash.
- También se conocen como funciones de resumen o de digestión. Estas funciones son irreversibles y se usan para verificar la integridad de los datos.