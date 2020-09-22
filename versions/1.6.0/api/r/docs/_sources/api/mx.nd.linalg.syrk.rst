

``mx.nd.linalg.syrk``
==========================================

Description
----------------------

Multiplication of matrix with its transpose.
Input is a tensor *A* of dimension *n >= 2*.

If *n=2*, the operator performs the BLAS3 function *syrk*:

*out* = *alpha* \* *A* \* *A*\ :sup:`T`

if *transpose=False*, or

  *out* = *alpha* \* *A*\ :sup:`T` \ \* *A*

if *transpose=True*.

If *n>2*, *syrk* is performed separately on the trailing two dimensions for all
inputs (batch mode).


.. note:: The operator supports float32 and float64 data types only.


**Example**::

	 
	 Single matrix multiply
	 A = [[1., 2., 3.], [4., 5., 6.]]
	 syrk(A, alpha=1., transpose=False)
	 = [[14., 32.],
	 [32., 77.]]
	 syrk(A, alpha=1., transpose=True)
	 = [[17., 22., 27.],
	 [22., 29., 36.],
	 [27., 36., 45.]]
	 
	 Batch matrix multiply
	 A = [[[1., 1.]], [[0.1, 0.1]]]
	 syrk(A, alpha=2., transpose=False) = [[[4.]], [[0.04]]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of input matrices                                   |
+----------------------------------------+------------------------------------------------------------+
| ``transpose``                          | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Use transpose of input matrix.                             |
+----------------------------------------+------------------------------------------------------------+
| ``alpha``                              | double, optional, default=1.                               |
|                                        |                                                            |
|                                        | Scalar factor to be applied to the result.                 |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L730

