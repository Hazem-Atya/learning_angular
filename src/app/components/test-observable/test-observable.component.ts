import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {

  counterObservable: Observable<number>;

  constructor(
    private toastr: ToastrService
  ) {
    this.counterObservable  = new Observable<number>(
      (observer) => {
        let i = 5;
        setInterval(() => {
          if (!i) {
            observer.complete();
          }
          console.log('inside', i);
          observer.next(i--);
        }, 1000);
      });

    this.counterObservable.subscribe(
      (val) => {
        console.log(val);
      }
    );

    this.counterObservable.pipe(
      map(x => x * 3),
      filter(y => !(y % 2))
    ).subscribe(
      (val) => {
        this.toastr.info('' + val);
      },
      (erreur) => {
        console.log(erreur);
      },
      () => {
        this.toastr.success('Fin du flux');
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('hey');
  }

}
