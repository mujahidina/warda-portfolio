function AboutMe() {
    return (
        <div className="bg-black h-screen flex flex-row items-center">
            <div className="left w-1/2 h-full">
                <img className="mt-28 ml-16" src="w2.png" alt="" />
            </div>

            <div className="relative w-1/2 h-full text-xl font-medium flex items-center">
                <div className="text-center space-y-2 text-white mr-6">
                    <img className="absolute inset-0 w-full h-full object-cover opacity-50 z-0" src="w3.png" alt="" />
                    <p className="relative z-10 mr-6 font-bold">As a passionate learner in cloud security, I am dedicated 
                        to understanding the principles and practices that safeguard data 
                        and applications in the cloud. My journey involves exploring essential 
                        security frameworks, risk assessment methodologies, and compliance standards.
                        I am committed to enhancing my knowledge in areas such as identity and access
                        management, encryption, and incident response. By continuously seeking hands-on
                        experience and staying updated with industry trends, I aim to contribute to building
                        secure cloud environments that protect sensitive information and support
                        organizational resilience.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
