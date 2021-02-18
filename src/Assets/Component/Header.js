import '../CSS/Header.css';


function Header() {

    const Header = () => {

    } 
    return (
            <section>
                <div class="grid grid-cols-3 header__all">
                    <div>
                    </div>
                    <div class="logo center">
                        <img src="/Assets/Images/Logo.png" height="200" width="100" />
                    </div>
                    <div class="desktop__navbar">
                        <div class="text-center">
                            <a class="navigator">PRODUK</a>
                            <a class="navigator">TENTANG KAMI</a>
                            <a class="navigator">ROADMAP</a>
                        </div>
                    </div>
                </div>
                <div class="fixed -inset-x-0 bottom-0 border__navbar mobile__navbar ">
                    <div class="text-center">
                        <a class="navigator">PRODUK</a>
                        <a class="navigator">TENTANG KAMI</a>
                        <a class="navigator">ROADMAP</a>
                    </div>
                </div>
            </section>
    );
}



export default Header;