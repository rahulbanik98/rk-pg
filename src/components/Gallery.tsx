import { useState } from 'react'
import styles from './Gallery.module.css'

const photos = [
  { src: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778413106/home1_ftjwgo.png', thumb: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778413106/home1_ftjwgo.png', label: 'Building Exterior', tag: 'Building' },
  { src: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412970/single_room_uqb4yq.jpg', thumb: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412970/single_room_uqb4yq.jpg', label: 'Single Room', tag: 'Rooms' },
  { src: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412971/single3_hqzi3f.jpg', thumb: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412971/single3_hqzi3f.jpg', label: 'Single Room', tag: 'Rooms' },
  { src: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412971/single2_drxovk.jpg', thumb: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412971/single2_drxovk.jpg', label: 'Single Room', tag: 'Rooms' },
  { src: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778405730/bathroom1_dbc0an.jpg', thumb: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778405730/bathroom1_dbc0an.jpg', label: 'Clean Bathroom', tag: 'Bathroom' },
  // { src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=75', label: 'Dining Area', tag: 'Common' },
  // { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75', label: 'Modern Kitchen', tag: 'Common' },
  { src: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412842/Double1_pueszo.jpg', thumb: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412842/Double1_pueszo.jpg', label: 'Double Sharing Room', tag: 'Rooms' },
  { src: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778413105/triple_1_lhnz8x.jpg', thumb: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778413105/triple_1_lhnz8x.jpg', label: 'Triple Sharing Room', tag: 'Rooms' },
  { src: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778413106/triple2_sbqjqm.jpg', thumb: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778413106/triple2_sbqjqm.jpg', label: 'Triple Sharing Room', tag: 'Rooms' },
  { src: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412842/double2_tu4bgm.jpg', thumb: 'https://res.cloudinary.com/diyxylamz/image/upload/q_auto/f_auto/v1778412842/double2_tu4bgm.jpg', label: 'Double Sharing Room', tag: 'Building' },
]

const tags = ['All', 'Building', 'Rooms', 'Bathroom']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'All' ? photos : photos.filter(p => p.tag === active)

  const prev = () => setLightbox(i => (i! - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox(i => (i! + 1) % filtered.length)

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') setLightbox(null)
  }

  return (
    <section id="gallery" className={styles.section}>
      <div className="container">

        {/* Header */}
        <div className={styles.header} data-aos="fade-right">
          <div className="section-label">A Peek Inside</div>
          <h2 className="section-title">Life at RK PG</h2>
          <p className="section-sub">
            Every corner is designed for comfort. Browse through our spaces and picture yourself here.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters} data-aos="fade-up" data-aos-delay="100">
          {tags.map(t => (
            <button
              key={t}
              className={`${styles.filterBtn} ${active === t ? styles.filterActive : ''}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <div
              key={p.src}
              className={`${styles.item} ${i === 0 ? styles.wide : ''}`}
              onClick={() => setLightbox(i)}
              data-aos="fade-up"
              data-aos-delay={`${(i % 4) * 70}`}
            >
              <img src={p.thumb} alt={p.label} className={styles.img} loading="lazy" />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.zoomIcon}>🔍</span>
                  <span className={styles.photoLabel}>{p.label}</span>
                  <span className={styles.photoTag}>{p.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Count */}
        <p className={styles.count} data-aos="fade-up">
          Showing {filtered.length} of {photos.length} photos
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
          onKeyDown={handleKey}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.lbInner} onClick={e => e.stopPropagation()}>

            {/* Close */}
            <button className={styles.lbClose} onClick={() => setLightbox(null)} aria-label="Close">✕</button>

            {/* Prev */}
            <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={prev} aria-label="Previous">‹</button>

            {/* Image */}
            <div className={styles.lbImgWrap}>
              <img src={filtered[lightbox].src} alt={filtered[lightbox].label} className={styles.lbImg} />
            </div>

            {/* Next */}
            <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={next} aria-label="Next">›</button>

            {/* Caption */}
            <div className={styles.lbCaption}>
              <span className={styles.lbLabel}>{filtered[lightbox].label}</span>
              <span className={styles.lbCounter}>{lightbox + 1} / {filtered.length}</span>
            </div>

            {/* Thumbnails strip */}
            <div className={styles.lbStrip}>
              {filtered.map((p, i) => (
                <button
                  key={p.src}
                  className={`${styles.lbThumb} ${i === lightbox ? styles.lbThumbActive : ''}`}
                  onClick={() => setLightbox(i)}
                >
                  <img src={p.thumb} alt={p.label} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
