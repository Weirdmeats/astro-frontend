//navbar principal
interface NavbarItems {
    href: string,
    texto: string,
    link?: string
}

export const NavbarMain: NavbarItems[] =[
    {href:"/", texto: "Inicio"},
    {href:"/", texto: "Hardware"}, //paginas dinamicas con slug
    {href:"/", texto: "Software"}, //paginas dinamicas con slug
    {href:"/ia", texto: "Ia"},
    {href:"/ciberseguridad", texto: "Ciberseguridad"},
    {href:"/gadgets", texto: "Gadgets"},
    {href:"/contacto", texto: "Contacto"},
]

  
//menu redes sociales
export const ItemRedes: NavbarItems[] = [
    {
        href: "https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-icono-de-facebook-redes-sociales.png", 
        texto: "Facebook", 
        link: "https://www.facebook.com/tvn.cl/?locale=es_LA"
    },
    {
        href: "https://cdn-icons-png.flaticon.com/512/3983/3983858.png", 
        texto: "Instagram", 
        link: "https://www.instagram.com/tvchile_tvn/"
    },
    {
        href: "https://cdn-icons-png.flaticon.com/256/3536/3536445.png", 
        texto: "Whatsapp", 
        link: "https://web.whatsapp.com/"
    }
]

export const NavFooter: NavbarItems[]=[
    {href:"/", texto: "comercial"},
    {href:"/", texto: "concursos"},
    {href:"/", texto: "tv tiempo"},
    {href:"/", texto: "politicas de privacidad"},
    {href:"/", texto: "trabaja con nosotros"},
]