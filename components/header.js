export default function header() {
    return `
<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
                <a class="navbar-brand" href="#"><i class="fa-solid fa-code"></i>Digital Store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
                <form class="d-flex" role="search">
                    <input class="form-control me-2 flex-grow-1" type="search" placeholder="pesquisa" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
        </div>
</nav>
<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
             
               
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                
                </div>
        </div>
</nav>
    `;
}