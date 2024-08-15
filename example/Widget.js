export default class Widget {
    constructor(Id = "", Title = "", X = 0, Y = 0) {
        this.Id = Id;
        this.Title = Title;
        this.X = X;
        this.Y = Y;
    }

    static Show(Widget) {
        let Dragging = false;

        const Object = document.createElement("div");
        Object.style.position = "absolute";
        Object.style.width = `${Widget.X}px`;
        Object.style.height = `${Widget.Y}px`;
        Object.style.transition = "height 0.25s ease, width 0.25s ease, left 50ms ease, top 50ms ease";
        Object.style.backgroundColor = "rgb(137, 163, 218)";
        Object.style.fontFamily = "Montserrat";
        Object.style.fontWeight = "bold";
        Object.className = `${Widget.Id}-OBJECT`;
        Object.id = `${Widget.Id}`;
        document.body.appendChild(Object);

        const Container = document.createElement("div");
        Object.appendChild(Container);

        const Topbar = document.createElement("div");
        Topbar.style.width = "100%";
        Topbar.style.height = `${Widget.Y / 12.5}px`;
        Topbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Topbar.style.className = `${Widget.Id}-TOPBAR`;
        Topbar.id = `${Widget.Id}-TOPBAR`;
        Container.appendChild(Topbar);

        const Title = document.createElement("span");
        Title.innerHTML = Widget.Title;
        Title.style.paddingLeft = "2.5%";
        Title.style.userSelect = "none";
        Title.style.fontSize = `${Widget.X / 4.5}%`;
        Title.className = `${Widget.Id}-TITLE`;
        Title.id = `${Widget.Id}-TITLE`;
        Topbar.appendChild(Title);

        const Close = document.createElement("span");
        Close.innerHTML = "X";
        Close.style.userSelect = "none";
        Close.style.color = "black";
        Close.style.transition = "color 0.125s ease";
        Close.style.cursor = "pointer";
        Close.style.float = "right";
        Close.style.fontSize = `${Widget.X / 5}%`;
        Close.style.marginTop = "0.5%";
        Close.style.marginRight = "2%";
        Close.addEventListener("click", () => {
            Object.querySelectorAll("*").forEach(element => {
                element.style.opacity = "0";
            });
            Object.style.width = "0%";
            Object.style.height = "0%";
            setTimeout(() => {
                Object.remove();
            }, 500);
        });
        Close.addEventListener("mouseover", () => {Close.style.color = "red";});
        Close.addEventListener("mouseout", () => {Close.style.color = "black";});
        Topbar.appendChild(Close);

        const Minimize = document.createElement("span");
        Minimize.innerHTML = "-";
        Minimize.style.color = "black";
        Minimize.style.transition = "color 0.125s ease";
        Minimize.style.cursor = "pointer";
        Minimize.style.float = "right";
        Minimize.style.fontSize = `${Widget.X / 5}%`;
        Minimize.style.marginRight = "2.5%";
        Minimize.dataset.minimized = "false";
        Minimize.style.userSelect = "none";
        Minimize.addEventListener("mouseover", () => {Minimize.style.color = "blue";});
        Minimize.addEventListener("mouseout", () => {Minimize.style.color = "black";});
        Minimize.addEventListener("click", () => {
            if (Minimize.dataset.minimized === "false") {
                Minimize.dataset.minimized = "true";
                Object.style.height = `${Widget.Y / 12.5}px`;
                Minimize.style.marginTop = "0.25%";
                Minimize.style.marginRight = "2%";
                Minimize.innerHTML = "+";
                Object.querySelectorAll("*").forEach(element => {
                    if (element !== Container && !Container.contains(element)) {
                        element.style.transition = "opacity 0.25s ease";
                        element.style.opacity = "0";
                    }
                });                          
            } else if (Minimize.dataset.minimized === "true") {
                Minimize.dataset.minimized = "false";
                Object.style.height = `${Widget.Y}px`;
                Minimize.style.marginRight = "2.5%";
                Minimize.innerHTML = "-";
                Object.querySelectorAll("*").forEach(element => {
                    element.style.opacity = "1";
                });
            }
        });
        Topbar.appendChild(Minimize);

        Topbar.addEventListener("click", function(e) {
            if (e.target === Topbar && !Dragging) {
                Dragging = true;
                Close.innerHTML = "◥";
                Minimize.style.opacity = "0";
            } else if (e.target === Topbar && Dragging) {
                Dragging = false;
                Close.innerHTML = "X";
                Minimize.style.opacity = "1";
            }
        });
        document.addEventListener("mousemove", function(event) {
            if (Dragging) {
                let NewLeft = event.clientX - (Object.offsetWidth / 2);
                let NewTop = event.clientY;
        
                if (NewLeft < 0) NewLeft = 0;
                if (NewLeft + Object.offsetWidth > window.innerWidth) NewLeft = window.innerWidth - Object.offsetWidth;
        
                if (NewTop < 0) NewTop = 0;
                if (NewTop + Object.offsetHeight > window.innerHeight) NewTop = window.innerHeight - Object.offsetHeight;
        
                Object.style.left = `${NewLeft}px`;
                Object.style.top = `${NewTop}px`;
            }
        });        

        Object.querySelectorAll("*").forEach(element => {
            element.style.transition = "opacity 0.25s ease";
        });

        return Object;
    }
}