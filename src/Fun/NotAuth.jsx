import Layout from '../components/Layout'
import './notAuth.css'
export default function NotAuth(){
    return (
        <Layout>
<div className="w3-display-middle">
<h1 className="w3-jumbo w3-animate-top w3-center"><code>Access Denied</code></h1>
<hr className="w3-border-white w3-animate-left" style={{margin:'auto',width:'50%'}} />
<h3 className="w3-center w3-animate-right">You don't have permission to view this Page.</h3>
<h6 className="w3-center w3-animate-zoom">error code:403 forbidden</h6>
</div>
</Layout>
    )
}