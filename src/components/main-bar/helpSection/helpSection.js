import "./helpSection.css";
export function CommunityContent() {
    return (
        <div>
            <div>
                <div className="communitytitle">About Community</div>
                <div className="titleText">"Hey man, hold my beer. Check this out" the classic words that end in either awesomeness or injury.</div>
                <div >
                    <div className="communityData">
                        <div className="hoverable">1.2m</div>
                        <div className="hoverable-online">370</div>
                    </div>
                    <div className="communityData"><div className="hoverable">members</div>
                        <div className="hoverable">Online</div></div>
                </div>
            </div>
        </div>
    );
}

export function MiscellaneousContent() {
    return (
        <div>
            <div className="helpSection">
                <div>
                    <div className="hoverable">Help</div>
                    <div className="hoverable">Reddit Coins</div>
                    <div className="hoverable">Reddit Premium</div>
                    <div className="hoverable">Reddit Gifts</div>
                </div>
                <div>
                    <div className="hoverable">About</div>
                    <div className="hoverable">Careers</div>
                    <div className="hoverable">Press</div>
                    <div className="hoverable">Advertise</div>
                    <div className="hoverable">Blog</div>
                    <div className="hoverable">Terms</div>
                    <div className="hoverable">Content Policy</div>
                    <div className="hoverable">Mod Policy</div>
                </div>
            </div>
            <div className="policyContentFooter"> © 2021 All rights reserved</div>
        </div>
    );
}

