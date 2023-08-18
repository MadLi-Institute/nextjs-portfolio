"use client"

const ResumeButton = () => {
  return (
    <div className="text-center">
      <button className="btn" onClick={() => window.resume_pdf.showModal()}>
        Resume
      </button>
      <dialog id="resume_pdf" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>.</button>
        </form>
      </dialog>
    </div>
  );
};

export default ResumeButton;
