import { mapEntry } from './waypointInterface'

const defaultObserverOptions = {}

const observerCallback = (entries: any, callback: any) => entries.forEach((entry: any) => entryCallback(entry, callback))

const entryCallback = (entry: any, callback: any) => callback(mapEntry(entry))

const createObserver = (callback: any, options: any) => new window.IntersectionObserver(callback, options)

const addObserver = (el: any, callback: any, options = defaultObserverOptions) => {
    const observer = createObserver((entries: any, observer: any) => observerCallback(entries, callback), options)

    observer.observe(el)
    return observer
}

const removeObserver = (observer: any, el: any) => observer.unobserve(el)

export { addObserver, removeObserver }
