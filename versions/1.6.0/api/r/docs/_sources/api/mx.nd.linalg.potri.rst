

``mx.nd.linalg.potri``
============================================

Description
----------------------

Performs matrix inversion from a Cholesky factorization.
Input is a tensor *A* of dimension *n >= 2*.

If *n=2*, *A* is a triangular matrix (entries of upper or lower triangle are all zero)
with positive diagonal. We compute:

*out* = *A*\ :sup:`-T` \* *A*\ :sup:`-1` if *lower* = *true*
  *out* = *A*\ :sup:`-1` \* *A*\ :sup:`-T` if *lower* = *false*

In other words, if *A* is the Cholesky factor of a symmetric positive definite matrix
*B* (obtained by *potrf*), then

  *out* = *B*\ :sup:`-1`

If *n>2*, *potri* is performed separately on the trailing two dimensions for all inputs
(batch mode).


.. note:: The operator supports float32 and float64 data types only.


.. note:: Use this operator only if you are certain you need the inverse of *B*, and           cannot use the Cholesky factor *A* (*potrf*), together with backsubstitution           (*trsm*). The latter is numerically much safer, and also cheaper.


**Example**::

	 
	 Single matrix inverse
	 A = [[2.0, 0], [0.5, 2.0]]
	 potri(A) = [[0.26563, -0.0625], [-0.0625, 0.25]]
	 
	 Batch matrix inverse
	 A = [[[2.0, 0], [0.5, 2.0]], [[4.0, 0], [1.0, 4.0]]]
	 potri(A) = [[[0.26563, -0.0625], [-0.0625, 0.25]],
	 [[0.06641, -0.01562], [-0.01562, 0,0625]]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of lower triangular matrices                        |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L275

