export function Header() {
    return (
        <div className="header d-flex nav nav-tabs" role="tablist">
            <div className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#" type="button" role="tab" aria-controls="" aria-selected="true"><i className="fas fa-phone-square-alt"></i> Activity</button>

            </div>
            <div className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#inbox" type="button" role="tab" aria-controls="inbox" aria-selected="false">Inbox</button>
            </div>
            <div className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#allcalls" type="button" role="tab" aria-controls="allcalls" aria-selected="false">All Calls</button>
            </div>
            <div className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#slider" type="button" role="tab" aria-controls="slider" aria-selected="false"><i className="fas fa-sliders-h"></i> </button>
            </div>
        </div>
    )
}