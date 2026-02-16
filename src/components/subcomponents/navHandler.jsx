export const handleNavClick = (e, id) => {

        if (e && typeof e.preventDefault === 'function') e.preventDefault()
        const target = document.getElementById(id)
        if (!target) return
        const nav = document.querySelector('nav')
        const navHeight = nav ? nav.offsetHeight : 0
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8
        window.scrollTo({ top, behavior: 'smooth' })
    }