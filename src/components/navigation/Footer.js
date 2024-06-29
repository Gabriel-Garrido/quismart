import { connect } from "react-redux"

function Footer(){
    return(
        <footer className="bg-dark-secondary text-light-text py-4 text-center">
      <p>&copy; 2024 Quismart. All rights reserved.</p>
    </footer>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

}) (Footer)
