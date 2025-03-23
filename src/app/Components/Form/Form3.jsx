const Form3 = () => {
    return (
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSc7a-eJIYhkiHEoo2LHUiAbbVIPmq2XOcosIeR024amFQoP3g/formResponse" method="POST" className="cs_contact_form">
            <h2 className="text-center cs_fs_36 cs_semibold">Book An Appointment</h2>
            <input type="text" className="cs_form_field cs_mb_22" placeholder="Your Name" name="entry.455049253" />
            <input type="email" className="cs_form_field cs_mb_22" placeholder="Your Email" name="entry.240261482" />
            <input type="text" className="cs_form_field cs_mb_22" placeholder="Select Subjects" name="entry.1641905770" />
            <textarea cols="30" rows="4" className="cs_form_field cs_mb_22" placeholder="Write Message..." name="entry.2118204743"></textarea>
            <button className="cs_btn cs_style_1 w-100" type="submit"><span>Appointment Now</span></button>
        </form>
    );
};

export default Form3;