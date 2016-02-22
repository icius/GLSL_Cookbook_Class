#version 430 core
out vec4 color;

in vec3 Normal;
in vec3 FragPos;

uniform vec3 lightPos;
uniform vec3 Kd;
uniform vec3 Ld;

void main()
{
    //Normalize the normal vectors for the fragment
    vec3 norm = normalize(Normal);

    //Calculate the direction of the light by subtracting the fragment position
    //from the light position
    vec3 lightDir = normalize(lightPos - FragPos);

    //The diffuse calculation.  Any angle greater than perpendicular to
    //the viewing angle gets no light (hence the 0.0)
    vec3 diffuse = Ld * Kd * max(dot(lightDir, norm), 0.0);

    color = vec4(diffuse, 1.0f);
}
