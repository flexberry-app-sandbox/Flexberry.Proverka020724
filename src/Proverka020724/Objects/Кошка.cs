﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proverka020724
{
    using ICSSoft.STORMNET;


    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Кошка.
    /// </summary>
    // *** Start programmer edit section *** (Кошка CustomAttributes)

    // *** End programmer edit section *** (Кошка CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class Кошка : ICSSoft.STORMNET.DataObject
    {

        private int fВозраст;

        private string fКличка;

        private string fОкрас;

        private IIS.Proverka020724.Жилье fЖилье;

        private IIS.Proverka020724.DetailArrayOfЛапаКошки fЛапаКошки;

        // *** Start programmer edit section *** (Кошка CustomMembers)

        // *** End programmer edit section *** (Кошка CustomMembers)


        /// <summary>
        /// Возраст.
        /// </summary>
        // *** Start programmer edit section *** (Кошка.Возраст CustomAttributes)

        // *** End programmer edit section *** (Кошка.Возраст CustomAttributes)
        public virtual int Возраст
        {
            get
            {
                // *** Start programmer edit section *** (Кошка.Возраст Get start)

                // *** End programmer edit section *** (Кошка.Возраст Get start)
                int result = this.fВозраст;
                // *** Start programmer edit section *** (Кошка.Возраст Get end)

                // *** End programmer edit section *** (Кошка.Возраст Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кошка.Возраст Set start)

                // *** End programmer edit section *** (Кошка.Возраст Set start)
                this.fВозраст = value;
                // *** Start programmer edit section *** (Кошка.Возраст Set end)

                // *** End programmer edit section *** (Кошка.Возраст Set end)
            }
        }

        /// <summary>
        /// Кличка.
        /// </summary>
        // *** Start programmer edit section *** (Кошка.Кличка CustomAttributes)

        // *** End programmer edit section *** (Кошка.Кличка CustomAttributes)
        [StrLen(255)]
        public virtual string Кличка
        {
            get
            {
                // *** Start programmer edit section *** (Кошка.Кличка Get start)

                // *** End programmer edit section *** (Кошка.Кличка Get start)
                string result = this.fКличка;
                // *** Start programmer edit section *** (Кошка.Кличка Get end)

                // *** End programmer edit section *** (Кошка.Кличка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кошка.Кличка Set start)

                // *** End programmer edit section *** (Кошка.Кличка Set start)
                this.fКличка = value;
                // *** Start programmer edit section *** (Кошка.Кличка Set end)

                // *** End programmer edit section *** (Кошка.Кличка Set end)
            }
        }

        /// <summary>
        /// Окрас.
        /// </summary>
        // *** Start programmer edit section *** (Кошка.Окрас CustomAttributes)

        // *** End programmer edit section *** (Кошка.Окрас CustomAttributes)
        [StrLen(255)]
        public virtual string Окрас
        {
            get
            {
                // *** Start programmer edit section *** (Кошка.Окрас Get start)

                // *** End programmer edit section *** (Кошка.Окрас Get start)
                string result = this.fОкрас;
                // *** Start programmer edit section *** (Кошка.Окрас Get end)

                // *** End programmer edit section *** (Кошка.Окрас Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кошка.Окрас Set start)

                // *** End programmer edit section *** (Кошка.Окрас Set start)
                this.fОкрас = value;
                // *** Start programmer edit section *** (Кошка.Окрас Set end)

                // *** End programmer edit section *** (Кошка.Окрас Set end)
            }
        }

        /// <summary>
        /// Кошка.
        /// </summary>
        // *** Start programmer edit section *** (Кошка.Жилье CustomAttributes)

        // *** End programmer edit section *** (Кошка.Жилье CustomAttributes)
        [PropertyStorage(new string[] {
                "Жилье"})]
        [NotNull()]
        public virtual IIS.Proverka020724.Жилье Жилье
        {
            get
            {
                // *** Start programmer edit section *** (Кошка.Жилье Get start)

                // *** End programmer edit section *** (Кошка.Жилье Get start)
                IIS.Proverka020724.Жилье result = this.fЖилье;
                // *** Start programmer edit section *** (Кошка.Жилье Get end)

                // *** End programmer edit section *** (Кошка.Жилье Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кошка.Жилье Set start)

                // *** End programmer edit section *** (Кошка.Жилье Set start)
                this.fЖилье = value;
                // *** Start programmer edit section *** (Кошка.Жилье Set end)

                // *** End programmer edit section *** (Кошка.Жилье Set end)
            }
        }

        /// <summary>
        /// Кошка.
        /// </summary>
        // *** Start programmer edit section *** (Кошка.ЛапаКошки CustomAttributes)

        // *** End programmer edit section *** (Кошка.ЛапаКошки CustomAttributes)
        public virtual IIS.Proverka020724.DetailArrayOfЛапаКошки ЛапаКошки
        {
            get
            {
                // *** Start programmer edit section *** (Кошка.ЛапаКошки Get start)

                // *** End programmer edit section *** (Кошка.ЛапаКошки Get start)
                if ((this.fЛапаКошки == null))
                {
                    this.fЛапаКошки = new IIS.Proverka020724.DetailArrayOfЛапаКошки(this);
                }
                IIS.Proverka020724.DetailArrayOfЛапаКошки result = this.fЛапаКошки;
                // *** Start programmer edit section *** (Кошка.ЛапаКошки Get end)

                // *** End programmer edit section *** (Кошка.ЛапаКошки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кошка.ЛапаКошки Set start)

                // *** End programmer edit section *** (Кошка.ЛапаКошки Set start)
                this.fЛапаКошки = value;
                // *** Start programmer edit section *** (Кошка.ЛапаКошки Set end)

                // *** End programmer edit section *** (Кошка.ЛапаКошки Set end)
            }
        }
    }
}

