export const lockScroll = () => {
    const scrollY = window.scrollY
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.documentElement.classList.add('scroll-lock')
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.paddingRight = `${scrollbarWidth}px`
}

export const unlockScroll = () => {
    const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10))

    document.documentElement.classList.remove('scroll-lock')
    document.body.style.removeProperty('position')
    document.body.style.removeProperty('top')
    document.body.style.removeProperty('width')
    document.body.style.removeProperty('padding-right')
    window.scrollTo(0, scrollY)
}
