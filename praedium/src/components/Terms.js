import React from "react";
import Term from "../components/Images/terms.png";

function Terms() {
  return (
    <div className="mt-5 pt-5">
      <div className="row justify-content-center p-4 ">
        <div
          className="col-sm-6 col-md-9 bg-info-subtle"
          style={{ height: "180px" }}
        >
          <img
            src={Term}
            className="rounded mx-auto d-block"
            style={{ width: "100px", height: "70px", marginTop: "50px" }}
            alt="..."
          />
          <h3 className="d-flex justify-content-center fw-bold">
            Terms & Condition
          </h3>
        </div>
        <div className="col-sm-6 col-md-9 g-4">
          <p>
            This website 99acres.com , including any subdomains thereof, and any
            other websites through which its services are made available, our
            mobile, tablet and other smart device applications, and application
            program interfaces etc, , (hereinafter collectively referred to as
            "99acres") is owned, hosted and operated by Info Edge (India) Ltd
            (hereinafter referred to as IEIL), a company incorporated in India
            under the Companies Act, 1956 and having its registered office at
            Ground Floor, GF-12A, 94, Meghdoot, Nehru Place, New Delhi - 110
            020. These terms and conditions, privacy policy and community
            guidelines regulating use of these Services constitute a legally
            binding agreement between 99acres and the User (the “Agreement”).
          </p>
          <p>
            99acres and/or any other website(s) linked to this website is an
            online information and communications service provided to you,
            subject to your compliance with the terms and conditions set forth
            below.
          </p>
          <p>
            IEIL may amend/modify these terms and conditions at any time, and
            such modifications shall be effective immediately upon posting of
            the modified terms and conditions on 99acres. You may review the
            modified terms and conditions periodically to be aware of such
            modifications and your continued access or use of 99acres, shall be
            deemed conclusive proof of your acceptance of these terms and
            conditions, as amended/modified from time to time. IEIL may also
            suspend the operation of 99acres for support or technical
            upgradation, maintenance work, in order to update the content or for
            any other reason.
          </p>
          <p>
            If you utilize 99acres in a manner inconsistent with these terms and
            conditions, IEIL may terminate your access, block your future access
            and/or seek such additional relief as the circumstances of your
            misuse may be deemed to be fit and proper.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
