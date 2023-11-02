<footer>
    <div class="footer-container">
        <div class="footer-content">
            <div class="section-left">

                <h2 class="footer-title">
                    <span class="reveal">Company</span>
                </h2>
                <ul>
                    <li><a href="/" style="text-decoration: none">About</a></li>
                    <li>placeholder</li>
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

    </div>
</footer>

<style>
    footer {
        background-color: aliceblue;
        margin-top: 20px;
        height: 40vh;
        z-index: 0;
    }
    
    .footer-container {
        z-index: 1;
        height: 100%;
        position: relative;
        padding: 20px 0 0 280px;
        display: flex;
        justify-content: center;
    }
    
    .footer-content {
        display: inline-flex;
        z-index: 1;
        color: black;
        height: fit-content;
    }

    .footer-content ul, a {
        color: gray;
        list-style-type: none;
    }

    .section-left {
        float: right;
        /* margin-right: 50px; */
        position: relative;
    }

    .section-right {
        float: left;
    }

</style>