<footer class="footer" >
        <div class="footer-content">
            <div class="section-left">
                <h2 class="footer-title">
                    <span class="reveal">Company</span>
                </h2>
                <ul>
                    <li><a href="/" style="text-decoration: none">About</a></li>
                    <li>Jobs</li>
                </ul>
            </div>
            <div class="section-right">
                <h2 class="footer-title">
                    <span class="reveal">Contact</span>
                </h2>
                <ul>
                    <li>Support</li>
                    <li>App</li>
                </ul>
            </div>
        </div>
    </footer>
<div class="trademark">© 2023 Sonus NZ</div>

<style>
    .footer {
        max-width: 83%;
        height: 30vh;
        position: relative;
        left: 280px;
        z-index: 0;
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
    }

    .footer-content ul, a {
        color: gray;
        list-style-type: none;
    } 

    .footer-content {
        border-bottom: 1px solid rgba(128, 128, 128, 0.425);
        padding: 0 60px 60px 0;
        height: fit-content;
        width: 100%;
        display: flex;
        position: relative;
    }

    .section-left {
        float: left;
        width: 300px;
    }

    .section-right {
        float: right;
        width: 100px;
    }

    .trademark {
        opacity: 0.5;
        padding: 20px 0 0 0;
    }
</style>