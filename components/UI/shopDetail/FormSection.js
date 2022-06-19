import styles from "./FormSection.module.css";


const FormSection = ()=>{ 
    return(
        <div className={styles.container}>
            <h2>تماس با اسون</h2>
            <p>برای پیگیری یا سوال درباره سفارش خود، فرم زیر را تکمیل کنید.</p>
            <form className={styles.form}>
                <div className={styles.inputGroup} data-group-name="name">
                    <label htmlFor="name">نام و نام خانوادگی</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className={styles.inputGroup} data-group-name="email">
                    <label htmlFor="email"> ایمیل</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className={styles.textareaInput}>
                    <label htmlFor="txt">متن پیام</label>
                    <textarea name="txt" id="txt"></textarea>
                </div>
                <div className={styles.submitBtn}>
                    <button className={styles.btn}>ثبت و ارسال</button>
                </div>
            </form>
        </div>
    );
  }; 

export default FormSection;